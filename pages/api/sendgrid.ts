import { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

const apiKey = process.env.SENDGRID_API_KEY;
const sender = process.env.EMAIL;
sendgrid.setApiKey(apiKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const msg = {
    to: "davidgoe85@gmail.com",
    from: sender,
    subject: `Du hast eine Nachricht von ${name} erhalten!`,
    text: "message",
    html: `<p>Name: ${name}<br/>
           Email: ${email}<br/>
           Message: <pre>${message}</pre></p>`,
  };
  sendgrid
    .send(msg)
    .then((resp) => {
      res.json({ status: "Message Sent" });
    })
    .catch((error) => {
      res.json({ status: "ERROR" });
    });
}
