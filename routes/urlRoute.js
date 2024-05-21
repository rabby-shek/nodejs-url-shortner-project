const express = require("express");
const {
  postUrl,
  getUrl,
  getAnalytics,
  getHomePage
} = require("../controllers/urlController");
const urlRouter = express.Router();

// Route to handle posting a new URL
urlRouter.post("/", postUrl);
urlRouter.get('/home-page', getHomePage);
// Route to handle retrieving a URL by short ID
urlRouter.get("/:shortId", getUrl);

// Route to handle getting analytics for a short URL
urlRouter.get("/analytics/:shortId", getAnalytics);



module.exports = { urlRouter };
