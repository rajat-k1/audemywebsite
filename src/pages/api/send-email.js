import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    // Set CORS headers (you can either use "*" for all origins or a specific one like below)
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );

    console.log("Request received:", req.method, req.url, req.query, req.body);
    const toEmail = req.body.email
    console.log("Email received:", toEmail);
    var user = ''
    var resetLink = ''

    try {
        // Fetch user from database using Prisma
        user = await prisma.user.findUnique({
            where: { email: toEmail },
        });
        console.log("User fetched from database:", user);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        console.log("User found:", user.name);

         // Generate reset token
        const resetToken = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET, { expiresIn: '10m' });
        resetLink = `http://localhost:5173/reset-landing-page?user=${user.name}&token=${resetToken}`;
        console.log("Reset link generated:", resetLink);

    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }

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
        from: process.env.HOST_EMAIL,
        to: toEmail,
        subject: "Reset Password",
        html: `
        <html>

        <head>
            <style>
                h1 {
                    text-align: center;
                    color: #077BB3;
                }

                i {
                    color: #808080;
                }
            </style>
        </head>

        <body>
            <h1>Audemy</h1>
            <hr>
            <p>Hi ${user.name},</p>
            <p>We received a request to reset your password. Click the below link to proceed:<br>
                <a href="${resetLink}"><b>Reset Password</b></a> <i>(This link will expire in 10 min)</i>
            </p>
            <p>If you did not request to reset your password, it is safe to disregard this message.</p>

            <br>
            <p>Thank You,<br>The Audemy Team</p>
        </body>

        </html>
      `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to:", toEmail);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Detailed Error:", error.message, error.stack); // Log the full error
        res.status(500).json({ error: "Failed to send email", details: error.message, stack: error.stack }); 
    }
}