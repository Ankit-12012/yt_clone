import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DB_CONNECTION = async () => {
  try {
    const db_res = await mongoose.connect(
      `${process.env.MONGODBURI}/${DB_NAME}`
    );
    console.log(`Mongodb connected . `);
    console.log(db_res.connection.host);
  } catch (err) {
    console.log("Mongodb connection error");
    console.log(err);
    process.exit(1);
  }
};
export default DB_CONNECTION;
