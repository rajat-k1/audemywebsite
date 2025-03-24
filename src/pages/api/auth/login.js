import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { email, password } = req.body.user;

        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid Password" });
        }

        //! Generate JWT token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        res.setHeader("Authorization", `Bearer ${token}`);
        res.status(200).json({ message: "Login successful", user, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    } finally {
        await prisma.$disconnect();
    }
}
