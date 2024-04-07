import { NextFunction, Request, Response } from "express";
import ApplicationError from "../shared/errors/AplicationError";

export function ErrorHandler(error: any, req: Request, res: Response, next: NextFunction) {
  if (error instanceof ApplicationError) {
      return res.status(error.statusCode).json({ error: error.message });
  }

  console.error(error);

  return res.status(500).json({ error: 'Unexpected server error.' });
}