import express from "express";
import { boardValidation } from "../validations/boardValidation.js";
import { boardController } from "../controllers/boardController.js";

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.status(200).json({ msg: "Get Success" });
  })
  .post(boardValidation.createView, boardController.createView);

export const BoardAPI = router;
