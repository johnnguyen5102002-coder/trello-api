import { boardModel } from "../models/boardModel.js";
import { slugify } from "../utils/formatters.js";
const createView = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title),
    };
    const createBoard = await boardModel.createView(newBoard);

    const getById = await boardModel.getById(createBoard.insertedId.toString());
    console.log(getById);
    return getById;
  } catch (error) {
    throw error;
  }
};

export const boardServices = {
  createView,
};
