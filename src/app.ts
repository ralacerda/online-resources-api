import express from "express";
import routes from "./routes";
import db from "./config/connectAtlas";
import { setCache } from "./config/cacheMiddleware";

db.on("error", () => console.error("Database conection error"));
db.once("open", () => console.info("Successfully connected to the database"));

const app = express();
app.use(setCache);
routes(app);

export default app;
