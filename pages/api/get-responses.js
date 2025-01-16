import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get all YT entries
    // Note: In a real app, you'd want to filter by user ID
    const responses = await prisma.yT.findMany({
      select: {
        id: true,
        gen: true,
        User: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    });

    // Format the responses to match your frontend expectations
    const formattedResponses = responses.map((response) => ({
      title: `Script ${response.id}`, // You might want to store actual titles in your schema
      content: response.gen,
      timestamp: new Date().toISOString(), // You might want to add a timestamp field to your schema
    }));

    res.status(200).json(formattedResponses);
  } catch (error) {
    console.error("Error fetching responses:", error);
    res.status(500).json({ error: "Error fetching responses" });
  }
}
