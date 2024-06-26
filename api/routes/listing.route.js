import express from "express";
import { createListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utilis/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);

export default router;
