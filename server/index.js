const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Hiqqo-Quiz Api!");
});

app.listen(port, () => {
  console.log(`Hiqqo-Quiz app listening at http://localhost:${port}`);
});
