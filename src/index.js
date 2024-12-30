import "dotenv/config";
import DB_CONNECTION from "./db/start.js";

console.log("env imported :", process.env);
DB_CONNECTION();
