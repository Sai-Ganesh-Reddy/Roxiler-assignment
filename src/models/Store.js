const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  location: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Store", StoreSchema);

