const express = require("express");
const app = express();
const port = 3000;
const dbConnection = require("./dbConnection");
const User = require("./user");
const cors = require("cors");
const bcrypt = require("bcrypt");

// Middleware to parse the request body
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// Request to create a new user
app.post("/registration", async (req, res) => {
  try{
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  // Hash the password before saving it
  const bcryptPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: bcryptPassword,
  });

  await user.save();
  res.status(201).json({ message: "User created successfully" });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});

// Login request to check if the user exists
app.post("/login", async (req, res) => {

  try {
  const { email, password } = req.body;
  const user = await User.findOne({email});

  if (!user) {
    return res.status(404).json({ message: 'Invalid credentials' });
  }

  // Compare the hashed password with the provided password
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return res.status(400).json({ error: "Invalid password" });
  }

  res.status(200).json({ message: "Login successful" });
} catch (error) {
  res.status(500).json({ error: error.message });
}
});

app.get("/", (req, res) => {
  res.send("Welcome to Hiqqo-Quiz Api!");
});

dbConnection().then(() => {
  app.listen(port, () => {
    console.log(`Hiqqo-Quiz app listening at http://localhost:${port}`);
  });
});
// End of snippet