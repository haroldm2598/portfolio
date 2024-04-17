import nodemailer from 'nodemailer';

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
