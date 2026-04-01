import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export async function getBiotechInsight(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are an expert biotechnologist and AI medical researcher for Aindra. Your task is to provide clear, scientific, yet accessible information about precision staining, histopathology, and AI in medical imaging. Keep responses professional and concise.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I couldn't process that insight right now. Please try again later.";
  }
}