import type { Request, Response } from "express";
import resources from "../models/Resource";
import basicQuery from "../utils/basicQuery";

export default class ResourceController {
  static getAllResources = async (req: Request, res: Response) => {
    await basicQuery(req, res, resources, {});
  };

  static getResourceByTag = async (req: Request, res: Response) => {
    await basicQuery(req, res, resources, { tags: req.params.tag });
  };

  static getAllTags = async (req: Request, res: Response) => {
    try {
      const allTags = await resources.aggregate([
        { $unwind: "$tags" },
        { $group: { _id: "$tags", count: { $sum: 1 } } },
        { $project: { _id: 0, name: "$_id", count: "$count" } },
      ]);

      res.send(allTags);
    } catch (e) {
      res.status(400).send({ message: `Error: ${e}` });
    }
  };
}
