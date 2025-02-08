import nodemailer from 'nodemailer';
import {EMAIL_HOST,EMAIL_PORT,EMAIL_USER,EMAIL_PASSWORD,MAIL_ENCRYPTION} from '../config/config.js';

const SendEmail=async(EmailTo,EmailSubject,EmailText,EmailHtmlBody)=>{

    const transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        secure: true,
        auth:{
            user: EMAIL_USER,
            pass: EMAIL_PASSWORD,
        },
        tls:{
            rejectUnauthorized: false,
         }
    })

    const mailOptions = {
        from: EMAIL_USER,
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText,
        html: EmailHtmlBody,
    }

    return await transporter.sendMail(mailOptions);
}



export default SendEmail