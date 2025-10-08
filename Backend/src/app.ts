import express, { type Request, type Response, type NextFunction } from "express";
import cors from "cors";
import { asyncHandler } from "./utils/asyncHandler.js";
import { ApiResponse } from "./utils/ApiResponse.js";
import { ApiError } from "./utils/ApiError.js";

const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.CORS_ORIGIN || "*",
}));

app.get("/", asyncHandler(async (req, res) => {
    const response = new ApiResponse(200, { status: "ok" }, "Server running");
    return res.status(200).json(response);
}));

app.use((req, res, next) => {
  next(new ApiError(404, "Route not found"));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Global Error Handler:", err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res
    .status(statusCode)
    .json(new ApiResponse(statusCode, null, message));
});


export { app };