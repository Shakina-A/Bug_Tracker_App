//....Protecting our routes....
//this middleware checks if the token is valid or not

//....Import jwt....
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {

 //....to get the token....
 //split the authorization header(in inspect and in network tab) to get the token
 //the token is expected to be in the format Bearer <token>
 //so bearer is in 0th index
 //token in 1st index so given as [1]
  const token = req.headers.authorization?.split(" ")[1];

  //....If token not found...
  if (!token) return res.status(401).json({ error: "Not authorized" });

  //....If token found ....
  // should check if now generated token is eqaul to the token(JWT_SECRET) given in .env file.
  try {
    // Decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded info to request
    next(); // Proceed to next middleware or route
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { protect };