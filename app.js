const dotenv = require("dotenv");
const express = require("express");
const app = express();
// const userController = require("./Controllers/user");
const userModel = require("./Models/user");
const bodyParser = require("body-parser");
const cors = require("cors");
const { check, validationResult } = require("express-validator");

dotenv.config();
app.use(bodyParser.json([]));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Swiggy-Clone Backend Server! endpoint : /api/ :D");
});

app.post(
  "/user",
  [
    check("firstname").isLength({ min: 3, max: 30 }),
    check("lastname").isLength({ min: 3, max: 30 }),
    check("age").isNumeric({ min: 0, max: 150 }),
    check("email").isEmail(),
    check("profileimage").isURL(),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    try {
      // console.log("17",req.body);
      let userDetail = req.body;
      let response = await userModel.insertMany([userDetail]);
      // console.log("19",response);
      res.json(response);
    } catch (error) {
      // console.log("22");
      res.json(response);
    }
  }
);

// app.get("/user", async (req, res) => {
//   try {
//     let response = await userModel.find({});
//     // console.log(response);
//     res.json(response);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });



module.exports = app;
