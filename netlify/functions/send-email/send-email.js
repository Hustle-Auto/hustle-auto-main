const client = require("@sendgrid/mail");
// CONTEXT is set by netlify, it is the name of the build’s deploy context. It can be production, deploy-preview, branch-deploy, or dev
const {
  SENDGRID_API_KEY,
  SENDGRID_TO_EMAIL,
  SENDGRID_FROM_EMAIL,
  EMAIL_SUBJECT_TAG,
} = process.env;

exports.handler = async function (event, context, callback) {
  console.log(`SENDGRID_API_KEY: '${SENDGRID_API_KEY}'`);
  console.log(`SENDGRID_TO_EMAIL: '${SENDGRID_TO_EMAIL}'`);
  console.log(`SENDGRID_FROM_EMAIL: '${SENDGRID_FROM_EMAIL}'`);
  console.log(`EMAIL_SUBJECT_TAG: '${EMAIL_SUBJECT_TAG}'`);

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
