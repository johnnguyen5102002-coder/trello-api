//import express from express;
import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/APIerror.js";

const createView = (req, res, next) => {
  try {
    //res.status(StatusCodes.CREATED).json({ msg: "Post from Validation" });
    throw new ApiError(StatusCodes.BAD_GATEWAY, "An error occurred");
  } catch (error) {
    next(error);
  }
};

export const boardController = { createView };
