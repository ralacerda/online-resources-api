import type { Request, Response } from "express";
import resources from "../models/Resource";

export default class ResourceController {
  static getAllResources = async (req: Request, res: Response) => {
    try {
      const allResources = await resources.find();
      res.send({ message: allResources });
    } catch (e) {
      res.status(400).send({ message: `Error: ${e}` });
    }
  };
}
