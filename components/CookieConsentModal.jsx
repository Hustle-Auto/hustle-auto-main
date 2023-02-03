import { useEffect, useState } from "react";

import * as cookies from "cookies-next";

const CookieConsentModalWrapper = ({ children }) => {
  return (
    <div className="fixed bottom-0 right-0 m-5 sm:max-w-screen-sm w-100 z-[999]">
      {children}
    </div>
  );
};

const CookieConsentModal = (props) => {
  const [cookieConsent, acceptCookieConsent, declineCookieConsent] =
    useCookieConsent(null);

  const handleOnDecline = () => {
    declineCookieConsent();
  };
  const handleOnAccept = () => {
    acceptCookieConsent();
  };

  // if the user has accepted or declined cookies, don't show the modal
  if (cookieConsent === true || cookieConsent === false) {
    return null;
  }

  return (
    <>
      <CookieConsentModalWrapper>
        <div className="p-8 bg-white border-2 rounded shadow-lg border-accent animate-fade-in">
          <h2 className="mb-5 text-lg font-bold text-black">Cookie Consent</h2>
          <p className="text-sm text-black">
            We use essential cookies to make our site work. With your consent,
            we may also use non-essential cookies to improve user experience,
            personalize content, and analyze website traffic. For these reasons,
            we may share your site usage data with our analytics partners. By
            clicking “Accept,“ you agree to our website&#39;s cookie use as
            described in our{" "}
            <a href="legal/cookie-policy" className="underline">
              Cookie Policy
            </a>
            .
          </p>
          <div className="flex justify-center mt-8 space-x-5">
            <button
              onClick={handleOnDecline}
              className="px-5 py-2 text-sm transition bg-transparent rounded hover:underline focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
            >
              <div>Decline</div>
            </button>
            <button
              onClick={handleOnAccept}
              className="px-5 py-3 text-sm text-white transition rounded hover:underline bg-accent hover:scale-105 active:scale-95 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
            >
              Accept
            </button>
          </div>
        </div>
      </CookieConsentModalWrapper>
    </>
  );
};

function useCookieConsent() {
  const cookieConsentKey = "cookie-consent";

  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    if (cookies.hasCookie(cookieConsentKey)) {
      setCookieConsent(cookies.getCookie(cookieConsentKey));
    }
  }, []);

  // if a user accepts cookies, set the cookie to true and remember for 1 year
  const acceptCookieConsent = () => {
    const consent = true;
    cookies.setCookie(cookieConsentKey, consent, {
      maxAge:
        60 /* seconds */ * 60 /* minutes */ * 24 /* hours */ * 365 /* days */,
    });
    setCookieConsent(consent);
  };

  // if a user declines, set the cookie to false and ask again in 1 day
  const declineCookieConsent = () => {
    const consent = false;
    cookies.setCookie(cookieConsentKey, consent, {
      maxAge:
        60 /* seconds */ * 60 /* minutes */ * 24 /* hours */ * 1 /* days */,
    });
    setCookieConsent(consent);
  };

  return [cookieConsent, acceptCookieConsent, declineCookieConsent];
}

export default CookieConsentModal;
