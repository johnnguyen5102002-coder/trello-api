import express from "express";
import { BoardAPI } from "./boardRouter.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Done!" });
});

router.use("/board", BoardAPI);

export default router;
