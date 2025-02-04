const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Serve the Angular build files
app.use(express.static(path.join(__dirname, "dist/Health-Challenge-Tracker")));

// Handle Angular routing, return index.html for unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/Health-Challenge-Tracker/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
