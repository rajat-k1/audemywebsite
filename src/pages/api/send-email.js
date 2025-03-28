import nodemailer from 'nodemailer';


export default async function handler(req, res) {
    // Set CORS headers (you can either use "*" for all origins or a specific one like below)
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );

    console.log("Request received:", req.method, req.url, req.query);

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.HOST_EMAIL,
            pass: process.env.EMAIL_APP_PASSWORD
        }
    });

    const mailOptions = {
        from: "V.josephraj26",
        to: req.query.email,
        subject: "Reset Password",
        text: "Click here to reset your password"
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to:", req.query.email);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Detailed Error:", error.message, error.stack); // Log the full error
        res.status(500).json({ error: "Failed to send email", details: error.message, stack: error.stack }); 
    }
}