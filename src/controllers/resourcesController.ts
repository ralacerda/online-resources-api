import type { Request, Response } from "express";
import resources from "../models/Resource";

export default class ResourceController {
  static getAllResources = async (req: Request, res: Response) => {
    try {
      let limit = Number(req.query.limit) || 10;
      let skip = Number(req.query.skip) || 0;

      const allResources = await resources.find().limit(limit).skip(skip);
      res.send(allResources);
    } catch (e) {
      res.status(400).send({ message: `Error: ${e}` });
    }
  };

  static getAllTags = async (req: Request, res: Response) => {
    try {
      const allTags = await resources.distinct("tags");

      res.send(allTags);
    } catch (e) {
      res.status(400).send({ message: `Error: ${e}` });
    }
  };

  static getResourceByTag = async (req: Request, res: Response) => {
    try {
      const resourceWithTag = await resources.find({ tags: req.params.tag });

      res.send(resourceWithTag);
    } catch (e) {
      res.status(400).send({ message: `Error: ${e}` });
    }
  };
}
