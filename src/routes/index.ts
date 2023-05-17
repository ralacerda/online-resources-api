import express, { Express } from "express";
import resourcesRoutes from "../routes/resourceRoutes";

const routes = (app: Express) => {
  app.use(express.json()).use("/api", resourcesRoutes);
};

export default routes;
