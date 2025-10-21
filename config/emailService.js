import http from "http";
import nodemailer from "nodemailer";

// Configure the SMTP transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send email
async function sendEmail(to, subject, text, html) {
  if (!to) {
    console.error("No email recipient provided");
    return {
      success: false,
      error: "No email recipient provided",
    };
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to,
      subject,
      text,
      html,
    });
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}

export default sendEmail;
