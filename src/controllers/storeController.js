const Store = require("../models/Store");

const createStore = async (req, res) => {
  try {
    const { name, location } = req.body;

    if (!name || !location) {
      return res.status(400).json({ message: "Name and location are required" });
    }

    // Check if store already exists
    const existingStore = await Store.findOne({ name: name.trim() });
    if (existingStore) {
      return res.status(400).json({ message: "Store already exists" });
    }

    const newStore = new Store({ name: name.trim(), location });
    await newStore.save();

    res.status(201).json({
      message: "Store created successfully",
      store: newStore,
    });
  } catch (error) {
    console.error("Error creating store:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createStore };
