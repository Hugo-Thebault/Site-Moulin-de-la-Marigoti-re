import { Link } from "react-router-dom";
import { setCookieConsent, useCookieConsent } from "@/hooks/useCookieConsent";

export default function CookieBanner() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const consent = useCookieConsent();

  if (!measurementId) return null;
  if (consent === "accepted" || consent === "rejected") return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 p-4"
      role="dialog"
      aria-live="polite"
      aria-label="Bandeau cookies"
    >
      <div className="mx-auto max-w-4xl rounded-xl bg-base-100/95 backdrop-blur border border-base-300 shadow-xl p-4 md:p-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm md:text-base text-base-content font-inter">
            <p className="font-medium">Cookies et mesure d'audience</p>
            <p className="mt-1 text-base-content/80">
              Nous utilisons des cookies pour améliorer votre expérience et, si
              vous l'acceptez, mesurer l'audience (Google Analytics) afin
              d'améliorer le site.
            </p>
            <p className="mt-2">
              <Link
                to="/mentions-legales#cookies"
                className="underline hover:opacity-80"
              >
                En savoir plus
              </Link>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:items-center">
            <button
              type="button"
              className="btn btn-outline btn-sm md:btn-md"
              onClick={() => setCookieConsent("rejected")}
            >
              Refuser
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm md:btn-md"
              onClick={() => setCookieConsent("accepted")}
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
