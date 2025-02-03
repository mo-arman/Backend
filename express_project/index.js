let express = require("express");
require("dotenv").config();
const { CheckToken } = require("./checkTokenMiddleware");

let app = express();

console.log(process.env.MyToken);
app.use(express.json()); // line write mandatory for access permission and any post get request etc.

let myToken = "1234567890";

let checkToken = (req, res, next) => {
  console.log("Middleware");
  if (req.query.token === "" || req.query.token === undefined) {
    return res.send({ status: 1, msg: "fill the token" });
  }
  if(req.query.token !== myToken){
    return res.send({ status: 2, msg: "Invalid Token" });

  }
  next();
};

app.use(checkToken); // Middleware

app.use((req, res, next) => {
    let myPassword = "123";
    if (req.query.password === "" || req.query.password === undefined) {
        return res.send({ status: 1, msg: "Please Fill The Correct Password" });
      }
      if(req.query.password !== myPassword){
        return res.send({ status: 2, msg: "Invalid Password" });
    
      }
      next();
});
app.get("/", (req, res) => {
  res.send({ status: 1, msg: "Home Page" });
});

app.get("/news",checkToken, (req, res) => {
  res.send({ status: 2, msg: "News Page API" });
});

app.get("/news/:id", (req, res) => {
  let currentId = req.params.id;
  res.send("news detail API" + currentId);
});
app.get("/about", (req, res) => {
  res.send({ status: 3, msg: "About Page API" });
});

app.post("/login", (req, res) => {
  console.log(req); // object

  res.status(200).json({
    status: 4,
    msg: "Login Page API",
    bodyData: req.body,
    queryData: req.query,
  });

  //   res.send({
  //     status: 4,
  //     msg: "Login Page API",
  //     bodyData: req.body,
  //     queryData: req.query,
  //   });
});
app.listen("8000");
