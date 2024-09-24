const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
    let { token } = req.cookies
      
    if (token) {
      let decode = jwt.verify(token, process.env.JWT_SECRET);
      req.body.userID = decode.id
      next();
    } else {
      res.json("login first");
    }
  };

  module.exports=Auth