import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { genre, mood, type } = await req.json();

    const prompt = `
You are an expert movie and TV recommendation assistant.

Recommend exactly 5 ${type} based on:

Genre: ${genre}
Mood: ${mood}

Rules:
- Only recommend real movies or TV series.
- Mix popular and hidden gems.
- Return ONLY valid JSON.
- Do not include markdown.

Return this format:

[
  {
    "title": "Movie Name",
    "year": "2023",
    "reason": "Why this matches the user's mood."
  }
]
`;

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "You are a movie recommendation expert.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.8,
    });

    const content = response.choices[0].message.content;

if (!content) {
  throw new Error("No response from OpenAI");
}

const recommendations = JSON.parse(content);

return NextResponse.json({
  recommendations,
});
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}