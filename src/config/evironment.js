import "dotenv/config";

export const ENV = {
  MONGODB_URI: process.env.MONGODB_URI,
  MONGODB_DATANAME: process.env.MONGODB_DATANAME,
  BUILD_MODE: process.env.BUILD_MODE,
};
