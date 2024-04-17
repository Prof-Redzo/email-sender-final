import nodemailer from "nodemailer";
import "dotenv/config";


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
export const sendMail = async (req, res) => {
try{
const {to, subject, html, text} = req.body;

const mailOptions = {
    from: '"Node test 👻" <encode.development24@gmail.com>', // sender address
    to: to.join(),
    subject
  
}
 if(text) {
  mailOptions.text = text;
 }
 if(html) {
  mailOptions.html = html;
 }
const info = await transporter.sendMail(mailOptions);
 console.log(info);

 res.send("Email sent successfully to: " + info?.accepted?.join());
} catch(e) {
  res.status(500).send("Could not send email");
}
};