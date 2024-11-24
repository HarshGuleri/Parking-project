const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/jwtMiddleware").validateToken;

const { registerUser, loginUser } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/profile", validateToken, (req, res) => {
    res.json({ message: "Access granted to protected route", user: req.user });
});

module.exports = router;
