const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// **Ensure the correct build folder path**
const distPath = path.join(__dirname, "dist", "Health-Challenge-Tracker"); // Ensure lowercase if needed

app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
