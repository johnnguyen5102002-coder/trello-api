import { boardModel } from "../models/boardModel.js";
import { slugify } from "../utils/formatters.js";
const createView = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title),
    };
    const createBoard = await boardModel.createView(newBoard);

    return createBoard;
  } catch (error) {
    throw error;
  }
};

export const boardServices = {
  createView,
};
