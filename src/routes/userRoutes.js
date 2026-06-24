import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "user get" });
});

router.post("/", (req, res) => {
  res.json({ message: "user post" });
});

router.put("/", (req, res) => {
  res.json({ message: "user put" });
});

router.delete("/", (req, res) => {
  res.json({ message: "user delete" });
});

export default router;
