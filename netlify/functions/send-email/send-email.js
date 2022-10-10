const client = require("@sendgrid/mail");

const {
  SENDGRID_API_KEY,
  SENDGRID_TO_EMAIL,
  SENDGRID_FROM_EMAIL,
  EMAIL_SUBJECT_TAG,
  SENDGRID_CONTACT_US_EMAIL_TEMPLATE_ID,
  SENDGRID_BOOK_NOW_EMAIL_TEMPLATE_ID,
} = process.env;

const EMAIL_TYPE = {
  CONTACT_US: "contact-us",
  BOOK_NOW: "book-now",
};

exports.handler = async function (event, context, callback) {
  if (!areEnvVarsValid()) {
    console.error("Missing required environment variables");
    return {
      statusCode: 500,
      body: "Missing required environment variables",
    };
  }

  console.info(
    `Got Request, event.body: ${JSON.stringify(event.body, null, 2)}`
  );

  const requestBody = JSON.parse(event.body);
  client.setApiKey(SENDGRID_API_KEY);

  let email;
  if (requestBody.emailType === EMAIL_TYPE.CONTACT_US) {
    email = createContactUsEmail(requestBody);
  } else if (requestBody.emailType === EMAIL_TYPE.BOOK_NOW) {
    email = createBookNowEmail(requestBody);
  } else {
    console.error("Invalid email type");
    return {
      statusCode: 400,
      body: "Invalid email type",
    };
  }

  try {
    await client.send(email);
    console.info("Email sent successfully");
    return {
      statusCode: 200,
      body: "Message sent",
    };
  } catch (err) {
    console.warn("Error sending email:");
    console.warn(err);
    return {
      statusCode: err.code,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};

function areEnvVarsValid() {
  return (
    SENDGRID_API_KEY &&
    SENDGRID_TO_EMAIL &&
    SENDGRID_FROM_EMAIL &&
    EMAIL_SUBJECT_TAG &&
    SENDGRID_CONTACT_US_EMAIL_TEMPLATE_ID &&
    SENDGRID_BOOK_NOW_EMAIL_TEMPLATE_ID
  );
}

function createContactUsEmail(requestBody) {
  return {
    from: SENDGRID_FROM_EMAIL,
    personalizations: [
      {
        to: [
          {
            email: SENDGRID_TO_EMAIL,
          },
        ],
        dynamic_template_data: {
          ...requestBody,
          subject: `[${EMAIL_SUBJECT_TAG}] ${requestBody.subject}`,
        },
      },
    ],
    template_id: SENDGRID_CONTACT_US_EMAIL_TEMPLATE_ID,
  };
}

function createBookNowEmail(requestBody) {
  return {
    from: SENDGRID_FROM_EMAIL,
    personalizations: [
      {
        to: [
          {
            email: SENDGRID_TO_EMAIL,
          },
        ],
        dynamic_template_data: {
          ...requestBody,
          subject: `[${EMAIL_SUBJECT_TAG}] ${requestBody.subject}`,
        },
      },
    ],
    template_id: SENDGRID_BOOK_NOW_EMAIL_TEMPLATE_ID,
  };
}
