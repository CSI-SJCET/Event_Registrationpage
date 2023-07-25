const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.pass,
  },
});

// Export the mailer function
module.exports.sendEmail = (email,name) => {
  const message = {
    from: "csi@sjcetpalai.ac.in",
    to:email,
    subject: "Registration Confirmation",
    text: `Dear ${name},

Thank you for registering for our workshop! It's a pleasure to have you onboard. Having the enthusiasm to learn concepts is the first step to success, and hope that we can achieve it together.
Make sure to join the WhatsApp group (link provided below).
https://chat.whatsapp.com/Bid5HPVbrhY8KHurV0P37M
Thanks and regards,

Sidharth Ganesh
Chairman, CSI SB SJCET PALAI`,
  };

  return transporter.sendMail(message);
  
};
