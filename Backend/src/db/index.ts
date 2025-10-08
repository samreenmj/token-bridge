import { PrismaClient } from "@prisma/client";
import { ApiError } from "../utils/ApiError.js";

const prisma = new PrismaClient(); // Prisma automatically uses process.env.DATABASE_URL

const connectDB = async (): Promise<void> => {
  try {
    await prisma.$connect();
    console.log("Database connected successfully!");

  } catch (error) {
    console.error("Database connection error:", error);
    throw new ApiError(500, "Database connection error");
  }
};

export { connectDB };