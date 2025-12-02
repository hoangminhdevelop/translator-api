import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { authMiddleware } from "./middleware/authentication.js";
import { translateController } from "./modules/translate/translate.controller.js";

const app = express();
const port = 3000;

// Middleware application
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Example route
app.post("/translate", authMiddleware, translateController);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
