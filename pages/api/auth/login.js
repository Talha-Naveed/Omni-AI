import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    console.log(user);
    if (!user || user.password !== password) {
      console.log(user, password);
      // In a real app, properly compare hashed passwords
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    // Convert BigInt to String before sending response
    const sanitizedUser = JSON.parse(
      JSON.stringify(userWithoutPassword, (_, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    );

    res.status(200).json(sanitizedUser);
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Error logging in" });
  }
}
