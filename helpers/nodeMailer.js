const nodemailer = require("nodemailer");

function nMailer(email) {
  const mailOptions = {
    from: '"minfonime" <dame9401@gmail.com>',
    to: email,
    subject: "Your email",
    text: email,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dame9401@gmail.com",
      pass: "Terserahgualah02",
    },
  });
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = nMailer;
