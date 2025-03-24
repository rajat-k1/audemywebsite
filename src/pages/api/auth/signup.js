import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method Not Allowed" });
        }

        const {
            first_name,
            last_name,
            school_name,
            email,
            password,
            confirm_password,
        } = req.body.user;

        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method Not Allowed" });
        }
        // Validate required fields
        if (
            !first_name ||
            !last_name ||
            !email ||
            !password ||
            !confirm_password
        ) {
            return res.status(400).json({ error: "All fields are required" });
        }
        // Validate password match
        if (password !== confirm_password) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        //! Check Existing User
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //! Create New user in Database
        const newUser = await prisma.user.create({
            data: {
                name: `${first_name} ${last_name}`,
                school: school_name,
                email,
                password: hashedPassword,
            },
        });

        return res
            .status(201)
            .json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
