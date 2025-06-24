//in controller we write logic for project

//.....importing User.js from model....
// ./will give u files from controller folder
// ../will give all folders in the project from which we can select what we need
const User = require("../models/User");

//....For hashing pssword.....
const bcrypt = require("bcryptjs");

//...FOr token generation....
const jwt = require("jsonwebtoken");

//....Register a new user....
exports.register = async (req, res) => {
  
  const { name, email, password, role } = req.body;//req.body=content from frontend that is entered by user

  try {
    
    //....Hash password using bcrypt library....
    //takes two argument 1.password entered by user 2. salt value(it defines how many time my hashing algo should run)
    const hashedPassword = await bcrypt.hash(password, 10);
    
     //...Saves the user to database...
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    //await returns a response according to that response only it is conculed as successfull or not.

    //...If succesfull...
    res.status(201).json({ message: "User registered." });
  } 
  
   //....If not successfull....
  catch (error) {
    // Handle errors, such as duplicate email
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {

  //....Get email and password from request body...
  const { email, password } = req.body;
  try {
    
    //....Find user by email....
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

     //....Check if password correct ....
    // Compare password with hashed password in database
    // bcrypt.compare returns a promise that resolves to true or false
    // If the passwords match, it resolves to true; otherwise, false
    // If the passwords do not match, we return an error response
    const isMatch = await bcrypt.compare(password, user.password);//password=now entered password//user.password=password that is saved in datatbase
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    //....Generate JWT token....
    //jwt takes two arguent1.payload 2.secret key
    // The token will expire after a certain period (e.g., 1 hour) for security
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );
    res.json({
      token,
      // Return user info
      user: { name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};