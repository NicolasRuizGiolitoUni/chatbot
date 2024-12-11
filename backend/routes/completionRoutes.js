const express = require("express");
const { getCompletion } = require("../controllers/completionController");
const router = express.Router();

router.post("/completion", getCompletion);

module.exports = router;
