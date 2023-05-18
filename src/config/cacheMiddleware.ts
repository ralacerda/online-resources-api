import type { Request, Response, NextFunction } from "express";

export function setCache(req: Request, res: Response, next: NextFunction) {
  const maxAge = 60 * 60 * 4;

  if (req.method == "GET") {
    res.setHeader("Cache-control", `public, max-age=${maxAge}`);
  } else {
    res.setHeader("Cache-control", `no-store`);
  }
  next();
}
