import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

function getPagePath(location) {
  const search = location.search || "";
  const hash = location.hash || "";
  return (location.pathname || "/") + search + hash;
}

function detectAdBlocker() {
  if (typeof document === "undefined") return false;

  const bait = document.createElement("div");
  bait.className = "ads ad adsbox ad-banner ad-unit";
  bait.style.position = "absolute";
  bait.style.left = "-9999px";
  bait.style.width = "1px";
  bait.style.height = "1px";
  bait.style.pointerEvents = "none";

  document.body.appendChild(bait);

  // If an adblocker hides/removes common ad selectors, this will trip.
  const blocked =
    bait.offsetParent === null ||
    bait.offsetHeight === 0 ||
    bait.offsetWidth === 0 ||
    bait.clientHeight === 0 ||
    bait.clientWidth === 0;

  document.body.removeChild(bait);
  return blocked;
}

export default function GoogleAnalytics() {
  const location = useLocation();
  const initializedRef = useRef(false);
  const adBlockedRef = useRef(false);
  const consent = useCookieConsent();

  useEffect(() => {
    if (!MEASUREMENT_ID) return;
    // Detect adblocker once (no network request)
    if (!adBlockedRef.current && typeof document !== "undefined") {
      try {
        adBlockedRef.current = detectAdBlocker();
      } catch {
        adBlockedRef.current = false;
      }
    }

    // Disable GA until consent is explicitly accepted, or if adblocker is active
    window[`ga-disable-${MEASUREMENT_ID}`] =
      consent !== "accepted" || adBlockedRef.current;
  }, [consent]);

  useEffect(() => {
    if (!MEASUREMENT_ID) return;
    if (consent !== "accepted") return;
    if (adBlockedRef.current) return;
    if (initializedRef.current) return;

    // Inject gtag script once
    if (!document.getElementById("ga-gtag")) {
      const script = document.createElement("script");
      script.id = "ga-gtag";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
      script.onerror = () => {
        // If something blocks the request (adblock, network), disable GA silently.
        adBlockedRef.current = true;
        window[`ga-disable-${MEASUREMENT_ID}`] = true;
      };
      document.head.appendChild(script);
    }

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = window.gtag || gtag;

    window.gtag("js", new Date());

    // Disable automatic page_view; we send them on route change (SPA)
    window.gtag("config", MEASUREMENT_ID, {
      anonymize_ip: true,
      send_page_view: false,
    });

    initializedRef.current = true;
  }, [consent]);

  useEffect(() => {
    if (!MEASUREMENT_ID) return;
    if (consent !== "accepted") return;
    if (adBlockedRef.current) return;
    if (!window.gtag) return;

    const page_path = getPagePath(location);

    try {
      window.gtag("event", "page_view", {
        page_path,
      });
    } catch {
      // ignore
    }
  }, [location.pathname, location.search, location.hash, consent]);

  return null;
}
