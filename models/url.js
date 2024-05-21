const { Schema, model } = require("mongoose");

const urlSchema = new Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      require: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamp: true }
);

const URL = model("url", urlSchema);
module.exports = URL;
