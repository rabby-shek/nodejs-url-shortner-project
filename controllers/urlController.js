const generateCustomId = require("../helpers/generateCustomId");
const URL = require("../models/url"); // Ensure this path is correct and the model is correctly defined

const postUrl = async (req, res) => {
  try {
    const body = req.body;

    // Validate the presence of the URL
    if (!body.url) {
      return res.status(400).json({
        message: "url is required",
      });
    }

    // Validate the URL format (optional but recommended)
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(body.url)) {
      return res.status(400).json({
        message: "Invalid URL format",
      });
    }

    // Generate a short ID
    const shortID = generateCustomId(8);

    // Create a new URL entry in the database
    await URL.create({
      shortId: shortID,
      redirectUrl: body.url,
      visitHistory: [],
    });

    // Return success response
    return res.status(201).json({
      message: "url created",
      id: shortID,
    });
  } catch (error) {
    // Return error response
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getUrl = async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId: shortId,
      },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(entry.redirectUrl);
  } catch (error) {
    // Return error response
    return res.status(500).json({
      message: error.message,
    });
  }
};
const getAnalytics = async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId: shortId });
    res.status(200).json({
      visits: result.visitHistory.length,
      analytics: result.visitHistory,
    });
  } catch (error) {
    // Return error response
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getHomePage = async (req, res) => {
  try {
    const allUrls = await URL.find({});
    return res.render('home',{
      urls: allUrls
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = { postUrl, getUrl, getAnalytics, getHomePage };
