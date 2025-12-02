import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "../constants.js";

export const geminiAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
