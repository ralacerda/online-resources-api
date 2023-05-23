import type { Request, Response, NextFunction } from "express";

export function setCors(req: Request, res: Response, next: NextFunction) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
}
