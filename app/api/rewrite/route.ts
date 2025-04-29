// app/api/rewrite/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!, // Never expose this in client
});

export async function POST(req: Request) {
  const { userInput } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [
        {
          role: "user",
          content: `Rewrite the following text in a friendly tone:\n\n"${userInput}"`,
        },
      ],
    });

    const message = completion.choices[0].message.content;
    return NextResponse.json({ message });
  } catch (error) {
    console.error("OpenAI Error:", error);
    return NextResponse.json({ error: "OpenAI request failed" }, { status: 500 });
  }
}
