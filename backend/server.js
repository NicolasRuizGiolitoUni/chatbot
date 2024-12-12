require("dotenv").config();
console.log("Loaded API Key:", process.env.OPENAI_API_KEY);
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const completionRoutes = require("./routes/completionRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", completionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
