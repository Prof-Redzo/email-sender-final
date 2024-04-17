import express from "express";
import { sendMail } from "./controller/email.controller.js";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Healthy");
});

app.post("/send-email", sendMail);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  console.log(process.env);
});