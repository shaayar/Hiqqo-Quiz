const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const {
  validateSignupInput,
  validateLoginInput,
  handleValidationErrors,
} = require("../middleware/authMiddleware");

router.post("/signup", validateSignupInput, handleValidationErrors, signup);
router.post("/login", validateLoginInput, handleValidationErrors, login);

module.exports = router;


