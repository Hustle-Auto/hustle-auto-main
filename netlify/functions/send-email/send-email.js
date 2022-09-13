const client = require("@sendgrid/mail");

const {
  SENDGRID_API_KEY,
  SENDGRID_TO_EMAIL,
  SENDGRID_FROM_EMAIL,
  EMAIL_SUBJECT_TAG,
} = process.env;

exports.handler = async function (event, context, callback) {
  if (
    !SENDGRID_API_KEY ||
    !SENDGRID_TO_EMAIL ||
    !SENDGRID_FROM_EMAIL ||
    !EMAIL_SUBJECT_TAG
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
    to: SENDGRID_TO_EMAIL,
    from: SENDGRID_FROM_EMAIL,
    subject: `[${EMAIL_SUBJECT_TAG}] ${subject}`,
    html: message,
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
