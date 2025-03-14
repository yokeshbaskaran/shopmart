const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username is already taken" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email is already taken" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must contain atleast 6 characters" });
    }

    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);

    const data = {
      username,
      email,
      password: hashedPassword,
    };

    const newUser = await User.create(data);
    if (newUser) {
      res.status(201).json(newUser);
    } else {
      return res.status(400).json({ error: "User cannot register" });
    }
  } catch (error) {
    console.log("Error in signup:", error);
    res.status(500).json({ error: "Tnternal Server Error" });
  }
};

const Login = async (req, res) => {};

module.exports = { Signup, Login };
