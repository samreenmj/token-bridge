import { config } from "dotenv";
import { app } from "./app.js";
import { PrismaClient } from "@prisma/client";
import { connectDB } from "./db/index.js";

config();

// initialize Prisma Client
const prisma = new PrismaClient();

const PORT = process.env.PORT || 8000;

// Function to connect database
async function connectDatabase() {
    try {
        await prisma.$connect();
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit process on failure
    }
}

// Graceful shutdown handling
process.on("SIGINT", async () => {
  console.log("Server shutting down...");
  await prisma.$disconnect();
  process.exit(0);
});

// Start the server only after DB connection
(async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
  });
})();