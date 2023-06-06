const express = require('express');
const {userData,registerUser} = require("../Controller/userController")
const router = express.Router();

router.route("/").get(userData)
router.route("/register").post(registerUser)

module.exports = router;