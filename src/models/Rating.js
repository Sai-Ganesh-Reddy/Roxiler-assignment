const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
  storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  review: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Rating", RatingSchema);
