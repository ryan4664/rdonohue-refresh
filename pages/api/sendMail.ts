import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const mailgun = require("mailgun-js");

  const mg = mailgun({
    domain: process.env.MAILGUN_BASE_URL,
    apiKey: process.env.MAILGUN_API_KEY,
  });

  let body = JSON.parse(req.body);

  const data = {
    from: `${body.fromEmail}`,
    to: "ryan@rdonohue.ca",
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
  };

  console.log(data)

  mg.messages().send(data, function (error, body) {
    console.log(body);
    console.log({ ...error });
  });

  res.status(200).json({});
};
