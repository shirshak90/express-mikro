import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  statusCode?: number;
}

export const errorHandler = (err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message: message,
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};
