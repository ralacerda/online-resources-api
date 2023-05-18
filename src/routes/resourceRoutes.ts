import express from "express";
import resourceController from "../controllers/resourcesController";

const router = express.Router();

router.get("/", resourceController.getAllResources);
router.get("/tags", resourceController.getAllTags);
router.get("/tag/:tag", resourceController.getResourceByTag);

export default router;
