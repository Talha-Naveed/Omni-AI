import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const responses = await prisma.linked.findMany({
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

      const formattedResponses = responses.map((response) => ({
        title: `LinkedIn Post ${response.id}`,
        content: response.gen,
        timestamp: new Date().toISOString(),
      }));

      res.status(200).json(formattedResponses);
    } catch (error) {
      console.error("Error fetching responses:", error);
      res.status(500).json({ error: "Error fetching responses" });
    }
  } else if (req.method === "POST") {
    const { title, content } = req.body;

    try {
      const savedResponse = await prisma.linked.create({
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
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
