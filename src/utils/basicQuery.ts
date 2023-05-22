import type { Document, FilterQuery, Model } from "mongoose";
import type { Request, Response } from "express";

export default async function basicQuery<
  T extends Document,
  Q extends FilterQuery<T>
>(req: Request, res: Response, model: Model<any>, query: Q) {
  let limit = Number(req.query.limit) || 10;
  let skip = Number(req.query.skip) || 0;

  const allResources = model.find(query).limit(limit).skip(skip);
  const resourcesCount = model.countDocuments(query);

  try {
    const [allResourcesResponse, resourcesCountResponse] = await Promise.all([
      allResources,
      resourcesCount,
    ]);

    res.send({ result: allResourcesResponse, count: resourcesCountResponse });
  } catch (e) {
    res.status(400).send({ message: `Error: ${e}` });
  }
}
