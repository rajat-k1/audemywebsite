import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";


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
    const { token, newPassword } = req.body;
    console.log("Token received:", token);
    console.log("New Password:", newPassword);
    try {
        console.log("Verifying token...");
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
          return res.status(480).json({ message: 'Invalid token or token expired!' });
        }
        console.log("Decoded token:", decoded);

        // Find user with valid token
        const user = await prisma.user.findFirst({
          where: {
            user_id: decoded.userId,
            //resetPasswordToken: token,
            //resetPasswordExpires: { gt: new Date() }
          }
        });
    
        if (!user) {
          return res.status(400).json({ message: 'User not found' });
        }

        console.log("User found:", user);
    
        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
    
        // Update password and clear reset token
        await prisma.user.update({
          where: { user_id: user.user_id },
          data: {
            password: hashedPassword,
            //resetPasswordToken: null,
            //resetPasswordExpires: null
          }
        });
        
        console.log("Password updated successfully for user:", user.name);
        res.status(200).json({ message: 'Password reset successful' });
      } catch (error) {
       res.status(500).json({ message: 'Error resetting password. Invalid or epired link.' });
      }

}