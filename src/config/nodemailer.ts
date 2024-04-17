// import nodemailer from 'nodemailer';
let nodemailer = require('nodemailer');

const email = process.env.EMAILADD;
const pass = process.env.EMAILPASS;

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: email,
		pass
	}
});

export const mailOptions = {
	from: email,
	to: email
};
