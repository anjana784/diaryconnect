import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const SES_CONFIG = {
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_REGION,
};

// instantiate SES client
const client = new SESClient(SES_CONFIG);

const sendEmail = async (email: string, subject: string, body: string) => {
  const input = {
    // SendEmailRequest
    Source: process.env.EMAIL_SENDER, // required
    Destination: {
      // Destination
      ToAddresses: [email],
    },
    Message: {
      // Message
      Subject: {
        // Content
        Data: subject, // required
        Charset: "utf-8",
      },
      Body: {
        // Body
        Text: {
          Data: body, // required
          Charset: "utf-8",
        },
        // Html: {
        //   Data: "<h1>Welcome</h1>", // required
        //   Charset: "utf-8",
        // },
      },
    },
  };
  const command = new SendEmailCommand(input);
  const response = await client.send(command);

  return response;
};

export default sendEmail;
