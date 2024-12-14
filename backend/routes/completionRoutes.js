const express = require("express");
const {
  getCompletion,
  generateConfig,
} = require("../controllers/completionController");
const router = express.Router();

router.post("/completion", getCompletion); // endpoint for chat completion
router.post("/generate-config", generateConfig); // endpoint for config generation

module.exports = router;
