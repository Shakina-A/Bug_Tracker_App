//Express-HTTP server framework
//HTTP-sends request from a client and receiving responce from a server

//....Importing express....
const express = require("express");

const { register, login } = require("../controllers/authController");

//.....Create a new router instance....
const router = express.Router();

// Route for registration
router.post("/register", register);
// Route for login
router.post("/login", login);

//....Export the router....
//so that we can use it in the main app
module.exports = router;