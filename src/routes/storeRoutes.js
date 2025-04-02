const express = require("express");
const { createStore } = require("../controllers/storeController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create a new store (Protected)
router.post("/", authMiddleware, createStore);

module.exports = router;
