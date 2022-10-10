const throwMissingEnvError = (envVarKey) => {
  throw new Error(`Missing required environment variable: ${envVarKey}`);
};

const HUS = {
  HUSTLE_AUTO_EMAIl:
    process.env["NEXT_PUBLIC_HUSTLE_AUTO_EMAIL"] ??
    throwMissingEnvError("NEXT_PUBLIC_HUSTLE_AUTO_EMAIL"),
  HUSTLE_AUTO_PHONE_NUMBER:
    process.env["NEXT_PUBLIC_HUSTLE_AUTO_PHONE_NUMBER"] ??
    throwMissingEnvError("NEXT_PUBLIC_HUSTLE_AUTO_PHONE_NUMBER"),
  UNDER_CONSTRUCTION:
    (process.env["NEXT_PUBLIC_UNDER_CONSTRUCTION"] ??
      throwMissingEnvError("NEXT_PUBLIC_HUSTLE_AUTO_PHONE_NUMBER")) === "true",
  HUSTLE_AUTO_SOCIAL_LINKS: {
    FACEBOOK: "https://www.facebook.com/HustleAutomotive",
    INSTAGRAM: "https://www.instagram.com/hustleautomotive/",
    LINKEDIN: "https://www.linkedin.com/company/hustle-automotive-services/",
    GOOGLE:
      "https://www.google.ca/maps/place/Hustle+Automotive+Services+Inc/@51.0860872,-114.0440112,10z/data=!4m5!3m4!1s0x0:0xabd669cb826e2d73!8m2!3d51.0860872!4d-114.0440112",
  },
};

export default HUS;
