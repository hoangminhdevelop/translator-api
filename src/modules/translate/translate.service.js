import { geminiAI } from "../../models/gemini.js";
import { getTranslatePrompt } from "../../prompts/translate.prompt.js";
import { MODEL } from "../../constants.js";

/**
 * @param {string} textNeedToTranslate
 * @param {string} targetLanguage
 * @returns {Promise<{text: string, targetLanguage: string, examples: string[], translatedText: string, other: {noun: string, verb: string, adj: string}}>}
 */

export const translateText = async (
  textNeedToTranslate,
  targetLanguage = "Vietnamese"
) => {
  const prompt = getTranslatePrompt(textNeedToTranslate, targetLanguage);

  const result = await geminiAI.models.generateContent({
    model: MODEL,
    contents: prompt,
    config: {
      maxOutputTokens: 500,
    },
  });

  const formatToJson = jsonStringToJson(result.text);

  return {
    examples: formatToJson.examples || [],
    translatedText: formatToJson.translatedText || "",
    other: {
      noun: formatToJson.other?.noun || "N/A",
      verb: formatToJson.other?.verb || "N/A",
      adj: formatToJson.other?.adj || "N/A",
    },
  };
};

export const jsonStringToJson = (input) => {
  try {
    // remove ```json, ``` , and whitespace
    const cleaned = input
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);
  } catch (err) {
    throw new Error("Invalid JSON format");
  }
};
