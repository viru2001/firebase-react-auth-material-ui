// const cookieParser = require("cookie-parser")
// const csrf = require("csurf")
// const bodyParser = require("body-parser")
// const express = require("express")
// const path = require("path");
// require('dotenv').config()

// const csrfMiddleware = csrf({ cookie: true})

// const PORT = process.env.PORT || 3001
// // console.log(process.env.PORT)
// const app = express()

// app.engine("html", require("ejs").renderFile);
// app.use(express.static("static"));

// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(csrfMiddleware);
// app.use(express.static("../public"));


// app.all("*", (req, res, next) => {
//   res.cookie("XSRF-TOKEN", req.csrfToken());
//   next();
// });

// // app.get("/login", function (req, res) {
// //   res.render("login.html");
// // });

// // app.get("/signup", function (req, res) {
// //   res.render("signup.html");
// // });

// // app.get("/profile", function (req, res) {
// //   res.render("profile.html");
// // });

// // app.get("/", function (req, res) {
// //   res.render("index.html");
// // });
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public", "index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`Listening on http://localhost:${PORT}`);
// });


const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(process.env.PORT, () => {
  console.log("server started on port 5000");
});