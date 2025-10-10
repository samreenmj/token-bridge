import { PrismaClient } from "@prisma/client";
import { ApiError } from "../utils/ApiError.js";

const prisma = new PrismaClient();

export const connectDB = async (): Promise<void> => {
    try {
        await prisma.$connect();
        console.log("Database connected successfully!!");
    } catch (error: any) {
    console.error("Database connection failed:", error.message);
    throw new ApiError(500, "Database connection failed");
  }
};

export { prisma };