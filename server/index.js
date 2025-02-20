const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);

const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Hiqqo-Quiz Api!");
});

const userRoute = require("./routes/UserRoutes");
app.use("/api/v1",userRoute)

app.listen(port, () => {
  console.log(`Hiqqo-Quiz app listening at http://localhost:${port}`);
});
