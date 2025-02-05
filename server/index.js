const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Hiqqo-Quiz Api!");
});

const userRoute = require("./routes/UserRoutes");
app.use("/api/v1",userRoute)

app.listen(port, () => {
  console.log(`Hiqqo-Quiz app listening at http://localhost:${port}`);
});
