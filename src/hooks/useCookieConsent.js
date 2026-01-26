import { useEffect, useState } from "react";

const CONSENT_KEY = "mdm_cookie_consent";
const CONSENT_EVENT = "mdm-cookie-consent-updated";

export function getCookieConsent() {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    if (value === "accepted" || value === "rejected") return value;
    return null;
  } catch {
    return null;
  }
}

export function setCookieConsent(value) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // ignore
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function resetCookieConsent() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(CONSENT_KEY);
  } catch {
    // ignore
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function useCookieConsent() {
  const [consent, setConsent] = useState(getCookieConsent());

  useEffect(() => {
    const sync = () => setConsent(getCookieConsent());

    const onStorage = (e) => {
      if (e.key === CONSENT_KEY) sync();
    };

    window.addEventListener(CONSENT_EVENT, sync);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener(CONSENT_EVENT, sync);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return consent;
}
