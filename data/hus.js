import * as yup from "yup";

let HUSTLE = {
  SITE: {
    UNDER_CONSTRUCTION: process.env["NEXT_PUBLIC_UNDER_CONSTRUCTION"],
  },
  COMPANY: {
    NAME: "Hustle Automotive Services INC",
    EMAIL: process.env["NEXT_PUBLIC_HUSTLE_AUTO_EMAIL"],
    PHONE_NUMBER: process.env["NEXT_PUBLIC_HUSTLE_AUTO_PHONE_NUMBER"],
    ADDRESS: process.env["NEXT_PUBLIC_HUSTLE_AUTO_ADDRESS"],
    DOMAIN: "hustleauto.com",
    URL: "https://hustleauto.com",
    CONTACT_FORM: "https://hustleauto.com/contact-us",
  },
  SOCIALS: {
    FACEBOOK: "https://www.facebook.com/HustleAutomotive",
    INSTAGRAM: "https://www.instagram.com/hustleautomotive/",
    LINKEDIN: "https://www.linkedin.com/company/hustle-automotive-services/",
    GOOGLE:
      "https://www.google.ca/maps/place/Hustle+Automotive+Services+Inc/@51.0860872,-114.0440112,10z/data=!4m5!3m4!1s0x0:0xabd669cb826e2d73!8m2!3d51.0860872!4d-114.0440112",
  },
};

const validationSchema = yup.object().shape({
  SITE: yup.object().shape({
    UNDER_CONSTRUCTION: yup.boolean().required(),
  }),
  COMPANY: yup.object().shape({
    NAME: yup.string().required(),
    EMAIL: yup.string().email().required(),
    PHONE_NUMBER: yup.string().required(),
    ADDRESS: yup.string().required(),
    DOMAIN: yup.string().required(),
    URL: yup.string().required(),
    CONTACT_FORM: yup.string().url().required(),
  }),
  SOCIALS: yup.object().shape({
    FACEBOOK: yup.string().url().required(),
    INSTAGRAM: yup.string().url().required(),
    LINKEDIN: yup.string().url().required(),
    GOOGLE: yup.string().url().required(),
  }),
});

validationSchema.validateSync(HUSTLE);

HUSTLE = validationSchema.cast(HUSTLE);

export default HUSTLE;
