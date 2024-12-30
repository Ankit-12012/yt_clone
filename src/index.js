import "dotenv/config";
import DB_CONNECTION from "./db/start.js";
import app from "./app.js";

console.log("env imported :", process.env);
const port = process.env.PORT || 4000;
DB_CONNECTION()
  .then(() => {
    app.get("/", (req, res) => {
      res.send("hello");
    });
    app.listen(port, () => {
      console.log("back in running on ", port);
    });
  })
  .catch((err) => {
    console.log("error in mongodb connection", err);
  });
