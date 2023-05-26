import express from "express";
import routes from "./routes";
import db from "./config/connectAtlas";
import { setCache } from "./config/cacheMiddleware";
import { setCors } from "./config/corsMiddleware";

db.on("error", () => console.error("Database conection error"));
db.once("open", () => console.info("Successfully connected to the database"));

const app = express();
app.use(setCache);
app.use(setCors);
app.use(express.static("public"));
routes(app);

export default app;
