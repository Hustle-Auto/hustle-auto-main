/* eslint-disable no-console */

import { Handler } from '@netlify/functions'
import sgMail from '@sendgrid/mail'

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not set')
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const handler: Handler = async (event, context) => {
  if (!event.body) {
    throw new Error('No body')
  }

  const { content, destination } = JSON.parse(event.body)

  const msg = {
    to: 'test@example.com',
    from: 'test@example.com', // Use the email address or domain you verified above
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  try {
    await sgMail.send(msg)
  } catch (error: any) {
    console.error(error)

    if (error.response) {
      console.error(error.response.body)
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  }
}

export { handler }
