//import express from express;
import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/APIerror.js";
import { boardServices } from "../services/boardService.js";
const createView = async (req, res, next) => {
  try {
    const createBoard = await boardServices.createView(req.body);
    res.status(StatusCodes.CREATED).json(createBoard);
  } catch (error) {
    next(error);
  }
};

export const boardController = { createView };
