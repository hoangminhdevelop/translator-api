export const getTranslatePrompt = (textNeedToTranslate, targetLanguage) => {
  return `
- Classify the input "${textNeedToTranslate}" as:
  1) single word, short phrase (<=3 words, no punctuation), slang, idiom.
  2) sentence/paragraph (otherwise)

- Translate the text to ${targetLanguage}.

- Output:
  • If First case (1):
    {
      "translatedText": "...",
      "examples": ["sentence example 1"],
      "other": {
        "noun": "form1 (translated1),... (or N/A if not any)",
        "verb": "form1 (translated1),... (or N/A if not any)",
        "adj": "form1 (translated1),... (or N/A if not any)"
      }
    }

  • If Second case (2):
    {
      "translatedText": "...",
      "other": {
        "noun": "extracted1 (translated1),... (or N/A if not any)",
        "verb": "extracted1 (translated1),... (or N/A if not any)",
        "adj": "extracted1 (translated1),... (or N/A if not any)"
      }
    }

- Rules:
  • Sentence example format: original sentence (translated sentence). Create 3 examples.
  • No comments or explanations.
  • Do not change field names.
  • JSON must use double quotes only.
  • For case (1): all returned forms in "other" must follow strict format: wordForm (translatedWordForm). Each item must include its own translation, no exceptions. Multiple items separated by comma. If no valid form exists, return "N/A".
      Example interpretation:
        Input: "go"
        noun: "go (translation), going (translation)"
        verb: "go (translation), went (translation), gone (translation)"
        adj: "going (translation), gone (translation)"

        Input: "relate"
        noun: "relation (translation), relationship (translation)"
        verb: "relate (translation), related (translation), relating (translation)"
        adj: "related (translation)"
`;
};
