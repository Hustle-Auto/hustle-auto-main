const client = require("@sendgrid/mail");

const {
  SENDGRID_API_KEY,
  SENDGRID_TO_EMAIL,
  SENDGRID_FROM_EMAIL,
  EMAIL_SUBJECT_TAG,
  SENDGRID_CONTACT_US_EMAIL_TEMPLATE_ID,
} = process.env;

exports.handler = async function (event, context, callback) {
  if (
    !SENDGRID_API_KEY ||
    !SENDGRID_TO_EMAIL ||
    !SENDGRID_FROM_EMAIL ||
    !EMAIL_SUBJECT_TAG ||
    !SENDGRID_CONTACT_US_EMAIL_TEMPLATE_ID
  ) {
    console.error("Missing required environment variables");
    return {
      statusCode: 500,
      body: "Missing required environment variables",
    };
  }

  const { message, subject } = JSON.parse(event.body);

  console.info("Got Request:");
  console.info(`event.body: ${JSON.stringify(event.body, null, 2)}`);

  client.setApiKey(SENDGRID_API_KEY);

  const data = {
    from: SENDGRID_FROM_EMAIL,
    subject: `[${EMAIL_SUBJECT_TAG}] ${subject}`,
    personalizations: [
      {
        to: [
          {
            email: SENDGRID_TO_EMAIL,
          },
        ],
        dynamic_template_data: {
          firstName: "Pranav",
          lastName: "Bodawala",
          email: "pranav.bodawala@gmail.com",
          phoneNumber: "123-456-7890",
          message: "clean my car bitch",
        },
      },
    ],
    template_id: SENDGRID_CONTACT_US_EMAIL_TEMPLATE_ID,
  };

  try {
    await client.send(data);
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
