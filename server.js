const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const runningApp = process.env.APP_NAME;

app.use;
"/static", express.static(path.join(__dirname, "public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log(`Request served by ${runningApp}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`${runningApp} is listening on port ${PORT}`);
});
