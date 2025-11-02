import express from "express";
import { CONNECT_DB } from "./mongodb.js";
import router from "../routers/index.js";
import { StatusCodes } from "http-status-codes";
import { errorHandlingMiddleware } from "../middlewares/errorHandlingMiddleware.js";
const APP_START = () => {
  const app = express();
  const port = 1087;
  app.use(express.json());
  app.use("/v1", router);
  app.use(errorHandlingMiddleware);
  app.listen(port, () => {
    console.log(`listen from http://localhost:${port}`);
  });
};

CONNECT_DB()
  .then(() => console.log("Connecting DB...."))
  .then(() => APP_START())
  .then(() => console.log("Connected DB"))
  .catch(() => {
    process.exit(0);
  });
