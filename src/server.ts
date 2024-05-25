import express from "express";
import cors from "cors";
import { config } from "./config/config";
import StatusCodes from "./enums/StatusCodes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });
const app = express();

app.use(cors());
app.use(express.json());

export const server = app.listen(config.PORT, () => {
  console.log(`Server is running at PORT ${config.PORT}`);
});

app.get("/health", (req, res, next) => {
  res.status(StatusCodes.OK).json({
    message: "Server is running...",
    success: true,
  });
});

app.use((req, res, next) => {
  res.status(StatusCodes.NOT_FOUND).json({
    message: "Sorry, Page not found!",
    success: false,
  });
});
