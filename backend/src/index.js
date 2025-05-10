import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import problemRoutes from "./routes/problem.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello guys, Welcome to CodeMorph🔥");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/problems", problemRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
