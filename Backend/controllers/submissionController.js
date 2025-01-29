import Submission from "../models/Submissions.js"

async function sendSubmission(req, res) {
  try {
    const { name, email, phone } = req.body
    const submission = new Submission({ name, email, phone })
    await submission.save()
    res.status(201).json({ message: "Submission successful" })
  } catch (error) {
    res.status(500).json({ message: "Error submitting form", error: error.message })
  }
}

async function getSubmission(req, res) {
    try {
    const submissions = await Submission.find().sort({ createdAt: -1 })
    res.json(submissions)
  } catch (error) {
    res.status(500).json({ message: "Error fetching submissions", error: error.message })
  }
}

export { sendSubmission, getSubmission };

