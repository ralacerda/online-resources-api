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

  static getAllTags = async (req: Request, res: Response) => {
    try {
      const allTags = await resources.distinct("tags");

      res.send({ message: allTags });
    } catch (e) {
      res.status(400).send({ message: `Error: ${e}` });
    }
  };

  static getResourceByTag = async (req: Request, res: Response) => {
    try {
      const resourceWithTag = await resources.find({ tags: req.params.tag });

      res.send({ message: resourceWithTag });
    } catch (e) {
      res.status(400).send({ message: `Error: ${e}` });
    }
  };
}
