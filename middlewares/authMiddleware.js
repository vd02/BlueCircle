const jwt = require("jsonwebtoken");
//if user is login, we will send the response to the authorized users only
//whenever the API request is called, we will attach the userID based on the token decryption, so if the token is decrypted we will get the user ID which we will attach to request body

module.exports = async (req, res, next) => {
  //will compare in req method and will call the next method if token is valid
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Auth failed",
          success: false,
        });
      } else {
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    return res.status(401).send({
      message: "Auth failed",
      success: false,
    });
  }
};
