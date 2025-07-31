// import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import express from "express";
import "dotenv/config";

const app = express();
const PORT = 3002;

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get("/", async (req, res) => {
  res.json({ data: "Hello!" });
});

app.listen(PORT, async () => {
  console.log(`server started on port ${PORT}`);
});
