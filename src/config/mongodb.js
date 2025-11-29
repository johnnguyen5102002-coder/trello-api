import { MongoClient, ServerApiVersion } from "mongodb";
import { ENV } from "../config/evironment.js";
let database = null;
const client = new MongoClient(ENV.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const CONNECT_DB = async () => {
  await client.connect();
  database = client.db(ENV.MONGODB_NAME);
};

export const GET_DB = () => {
  if (!database) {
    throw Error("you need to connect DB...");
  }
  return database;
};

export const CLOSE_DB = async () => {
  await client.close();
};
