import { NextApiRequest, NextApiResponse } from "next";
import { SentMessageInfo } from "nodemailer";
const nodemailer = require("nodemailer");

const PASSWORD = process.env.PASSWORD;
const EMAIL = process.env.EMAIL;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });
  const mailData = {
    from: EMAIL,
    to: "davidgoe85@gmail.com",
    subject: `Nachricht von ${req.body.name}`,
    replyTo: req.body.email,
    text: req.body.message,
    html: `
    <p>${req.body.message}</p>
    `,
  };

  try {
    const info: SentMessageInfo = await transporter.sendMail(mailData);
    console.log(info);
    res.status(200).json({ message: "success" });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    }
  }
}
