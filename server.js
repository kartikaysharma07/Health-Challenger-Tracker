const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Serve the static Angular files
app.use(express.static(path.join(__dirname, "dist/Health-Challenge-Tracker")));

// Handle Angular routing by serving index.html for unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/Health-Challenge-Tracker/browser/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
