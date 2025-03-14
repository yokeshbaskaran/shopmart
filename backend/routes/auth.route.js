const express = require("express");
const router = express.Router();

const { Signup, Login } = require("../controllers/auth.controller");

// router.get("/", getMe);
router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;
