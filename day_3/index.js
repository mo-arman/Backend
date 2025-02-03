let express = require("express");

let app = express();
app.use(express.json()); // This is used to parse the body of the request. means app used data json format.


let my_Token = "1234567890"; // This is the token which is used to check the token.

let my_pass = "@123" // This is the password which is used to check the password.


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

app.use(checkToken); // This is used to call the middleware for all the routes.



app.use((req, res, next) => {   // This is used to call the middleware for all the routes.
    console.log("Middleware 1"); 
    if (req.query.pass == " " || req.query.my_pass == undefined) {
        return res.send({ status: 0, message: "PLZ fill The Password" });
      }
    
      if(req.query.pass != my_pass) {
        return res.send({ status: 0, message: "Invalid Password" });
        }
    
       if(req.query.pass == my_pass) {
        console.log("Password is valid");
        }   
    
    
      next(); // This is used to call the next middleware or the actual route.
    
    });
    
    

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send({ status: 1, message: "About Us" });
});

app.get("/news", (req, res) => {
  res.send({ status: 1, message: "News" });
});

app.get("/products", (req, res) => {
  res.send({ status: 1, message: "Products" });
});

app.get("/news/:id", (req, res) => {
  // :id is used to get the id from the url
  res.send({ status: 1, message: "News", id: req.params.id }); // req.params.id is used to get the id from the url
});

app.post("/login", (req, res) => {
  // When we use post method, we can't test it in browser. We can use Postman to test it.
  console.log(req.body); // req.body is used to get the data from
  res.send({
    status: 1,
    message: "Login",
    body_data: req.body,
    query: req.query,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
