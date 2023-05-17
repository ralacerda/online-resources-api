import express from "express";
import resourceController from "../controllers/resourcesController";

const router = express.Router();

router.get("/", resourceController.getAllResources);

export default router;
