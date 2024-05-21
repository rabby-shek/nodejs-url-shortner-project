const express = require("express");
const path = require("path");
const { urlRouter } = require("./routes/urlRoute");
const databaseConnection = require("./config/dbConfig");
const app = express();
const PORT = 6060;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(urlRouter);
app.listen(PORT, () => {
  databaseConnection();
  console.log(`server started at http://localhost:${PORT}`);
});
