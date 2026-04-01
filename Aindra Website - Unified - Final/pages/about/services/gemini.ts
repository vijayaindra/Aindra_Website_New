import { GoogleGenAI } from "@google/genai";

const getApiKey = (): string => {
  const viteKey = (import.meta as any)?.env?.VITE_API_KEY;
  const legacyKey = (globalThis as any)?.process?.env?.API_KEY;
  return viteKey || legacyKey || "";
};

export async function getBiotechInsight(prompt: string) {
  const apiKey = getApiKey();

  // Keep UI usable even when no API key is configured.
  if (!apiKey) {
    return "AI assistant is in demo mode right now. Add an API key later to enable live responses.";
  }

  const ai = new GoogleGenAI({ apiKey });

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
