import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import httpStatus from "http-status";

import { ApiError } from "./utils/ApiError";
import { globalErrorHandler } from "./utils/errorHandler";
import authRoutes from "./routes/auth.route";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


// routes
app.use("/api/auth", authRoutes);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(
    new ApiError(
      httpStatus.NOT_FOUND,
      `Cannot find ${req.originalUrl} on this server!`
    )
  );
});

app.use(globalErrorHandler);

export default app;
