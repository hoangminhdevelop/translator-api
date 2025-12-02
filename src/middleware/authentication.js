import { WHITE_LIST_PRIVATE_KEYS } from "../constants.js";

export const authMiddleware = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  const whitelist = WHITE_LIST_PRIVATE_KEYS.split(",").map((key) => key.trim());

  // Check if the provided API key is in the whitelist
  if (!apiKey || !whitelist.includes(apiKey)) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
};
