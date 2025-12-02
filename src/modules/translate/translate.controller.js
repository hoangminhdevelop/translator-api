import { translateText } from "./translate.service.js";

export const translateController = async (req, res) => {
  try {
    const { text, targetLanguage } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Missing 'text' query parameter" });
    }

    if (!targetLanguage) {
      return res
        .status(400)
        .json({ error: "Missing 'targetLanguage' query parameter" });
    }

    const translatedData = await translateText(text, targetLanguage);
    return res.json(translatedData);
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
