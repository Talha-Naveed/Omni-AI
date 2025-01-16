import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { title, content } = req.body;

  try {
    const savedResponse = await prisma.yT.create({
      data: {
        gen: content,
        User: {
          connectOrCreate: {
            where: { id: 1 },
            create: {
              name: "Default User",
              email: "default@example.com",
              password: "default",
            },
          },
        },
      },
    });

    res.status(201).json(savedResponse);
  } catch (error) {
    console.error("Error saving response:", error);
    res.status(500).json({ error: "Error saving response" });
  }
}
