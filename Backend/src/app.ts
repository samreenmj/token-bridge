import express from "express";
import cors from "cors";
import { config } from "dotenv";
import asyncHandler from "./utils/asyncHandler.js";

config();

const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.CORS_ORIGIN || "*",
}));

app.get("/", asyncHandler(async (req, res) => {
    res.json({ message: "API is running" });
}));