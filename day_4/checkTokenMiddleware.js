
let my_Token = "123456";
let checkToken = (req, res, next) => {
    console.log("Check Token Middleware");
    if (req.query.token == " " || req.query.token == undefined) {
      return res.send({ status: 0, message: "Token is required" });
    }
  
    if(req.query.token != my_Token) {
      return res.send({ status: 0, message: "Invalid Token" });
      }
  
     if(req.query.token == my_Token) {
      console.log("Token is valid");
      }   
  
  
    next(); // This is used to call the next middleware or the actual route.
  };

  module.exports = checkToken;
  