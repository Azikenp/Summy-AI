import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { createClient } from "@supabase/supabase-js";
import { auth } from "@clerk/nextjs/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_AI_KEY!,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! 
);

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const { prompt } = await req.json();

    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const aiMessage =
      result?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

    
    await supabase.from("search_history").insert([
      { user_id: userId, role: "user", content: prompt },
      { user_id: userId, role: "assistant", content: aiMessage },
    ]);

    return NextResponse.json({ message: aiMessage });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Gemini API failed" }, { status: 500 });
  }
}
