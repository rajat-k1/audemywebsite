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
                <style type="text/css">
                    /* Hover effect for email clients that support it */
                    @media screen and (max-width: 600px) {
                        .button {
                            width: 100% !important;
                        }
                    }
                    .button:hover {
                        background-color: #ffffff !important;
                        color: #087BB4 !important;
                        border-color: #087BB4 !important;
                    }
                </style>
            </head>
            <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f9f9f9; color: #333;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f9f9f9; padding: 20px;">
                    <tr>
                        <td align="center">
                            <table role="presentation" width="100%" max-width="600px" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                                
                                <!-- Header -->
                                <tr>
                                    <td align="center" style="padding: 20px 0; border-bottom: 1px solid #eee;">
                                        <h1 style="margin: 0; font-size: 32px; color: #087BB4; font-weight: bold;">audemy</h1>
                                    </td>
                                </tr>

                                <!-- Body -->
                                <tr>
                                    <td style="padding: 20px; font-size: 16px; line-height: 1.5; color: #333;">
                                        <p style="margin: 0 0 16px;">Hi ${user.name},</p>
                                        <p style="margin: 0 0 16px;">We received a request to reset your password.</p>
                                        
                                        <!-- Button Wrapper -->
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 20px 0; text-align: center;">
                                            <tr>
                                                <td align="center" style="border-radius: 8px;">
                                                    <a href="${resetLink}" target="_blank" 
                                                        style="
                                                            display: inline-block;
                                                            padding: 12px 24px;
                                                            font-size: 16px;
                                                            color: #ffffff;
                                                            background-color: #087BB4;
                                                            border: 1px solid black;
                                                            border-radius: 8px;
                                                            font-weight: bold;
                                                            text-decoration: none;
                                                            border-right: 4px solid black;
                                                            border-bottom: 4px solid black;
                                                            transition: all 0.3s ease-in-out;
                                                        "
                                                        class="button">
                                                        Reset my Password
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>

                                        <p style="margin: 0; font-size: 14px; color: #777;">(This link will expire in 10 minutes)</p>
                                        <br>
                                        <p style="margin: 0;">If you did not request to reset your password, it is safe to disregard this message.</p>
                                        <br>
                                        <p style="margin: 0;">Thank you,<br>The Audemy Team</p>
                                    </td>
                                </tr>
                                
                            </table>
                        </td>
                    </tr>
                </table>
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