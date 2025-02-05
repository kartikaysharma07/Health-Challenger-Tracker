const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Define the correct build folder path
const distPath = path.join(__dirname, "dist", "Health-Challenge-Tracker", "browser");

// Serve static files correctly
app.use(express.static(distPath));

// Catch-all route to serve index.html for Angular routing
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"), (err) => {
    if (err) {
      res.status(500).send("Error loading index.html");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
