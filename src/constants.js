import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;

export const WHITE_LIST_PRIVATE_KEYS =
  process.env.WHITE_LIST_PRIVATE_KEYS || "";

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

export const MODEL = process.env.MODEL || "gemini-2.0-flash-lite";
