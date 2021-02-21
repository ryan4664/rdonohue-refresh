import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {

  const mailgun = require("mailgun-js");
  const DOMAIN = process.env.MAILGUN_BASE_URL;
  const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });
  const data = {
    from: "Excited User <me@samples.mailgun.org>",
    to: "ryan@rdonohue.ca",
    subject: "Hello",
    text: "Testing some Mailgun awesomness!",
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
    console.log(error)
  });

  res.status(200).json({});

};
