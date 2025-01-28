import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import submissionRoutes from "./routes/submissions.js"
import http from "http";

dotenv.config();

connectDB();

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 4000;
const __dirname = path.resolve();

// Middlewares
app.use(cors())
app.use(express.json({ limit: "50mb" })); 
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", submissionRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/Frontend/dist")));

  // react app
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
