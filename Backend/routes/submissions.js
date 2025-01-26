const express = require("express")
const router = express.Router()
const Submission = require("../models/Submissions")

// Submit a new entry
router.post("/submit", async (req, res) => {
  try {
    const { name, email } = req.body
    const submission = new Submission({ name, email })
    await submission.save()
    res.status(201).json({ message: "Submission successful" })
  } catch (error) {
    res.status(500).json({ message: "Error submitting form", error: error.message })
  }
})

// Get all submissions (for admin panel)
router.get("/submissions", async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ createdAt: -1 })
    res.json(submissions)
  } catch (error) {
    res.status(500).json({ message: "Error fetching submissions", error: error.message })
  }
})

module.exports = router

