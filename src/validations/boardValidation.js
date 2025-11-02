import express from "express";
import Joi from "joi";
import {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} from "http-status-codes";
import ApiError from "../utils/APIerror.js";

const createView = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    description: Joi.string().required().min(3).max(50).trim().strict(),
  });

  try {
    //console.log("req.body:", req.body);
    await correctCondition.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    next(
      new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(err).message)
    );
  }
};

export const boardValidation = { createView };
