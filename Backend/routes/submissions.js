import express from "express";
import { getSubmission, sendSubmission } from "../controllers/submissionController.js"

const router = express.Router()

router.post("/submit", sendSubmission)
router.get("/submissions", getSubmission)

export default router;

