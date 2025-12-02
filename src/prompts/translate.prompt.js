export const getTranslatePrompt = (textNeedToTranslate, targetLanguage) => {
  return `
        - Translate the following text to ${targetLanguage}:"${textNeedToTranslate}".
        - Return ONLY a valid JSON object in this exact structure:
            {
                "translatedText": "translated text here",
                "examples": ["example sentence 1 (in original language)", "example sentence 2 (in original language)", "example sentence 3 (in original language)"],
                "other": {
                    "noun": "list related english noun forms or N/A if not applicable",
                    "verb": "list related english verb forms or N/A if not applicable",
                    "adj": "list related english adjective forms or N/A if not applicable"
                }
            }
        - Rules: Do not add comments or explanation. Do not change the JSON field names. Ensure the JSON is valid (double quotes only). If text need translate is a sentence or paragraph you ONLY return translatedText field (exclude other and examples fields).`;
};
