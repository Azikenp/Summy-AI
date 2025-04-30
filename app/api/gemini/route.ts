import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_AI_KEY!,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    console.log("Gemini raw response:", result?.candidates?.[0]?.content?.parts?.[0]?.text);
    
    const text = result.text || result?.response?.candidates?.[0]?.content?.parts?.[0]?.text;

    return NextResponse.json({ message: text || "No response text found" });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Gemini API failed" }, { status: 500 });
  }
}
