import nodemailer from "nodemailer";

const zohomail = process.env.ZOHOEMAIL;
const pass = process.env.ZOHOPASS;

export const transporter = nodemailer.createTransport({
  service: "zoho",
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: zohomail,
    pass,
  },
});

export const mailOptions = {
  from: zohomail,
  to: "mikedcruz3@gmail.com",
  subject: "New message from PORTFOLIO",
};
