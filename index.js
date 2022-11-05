const express = require("express");
const { connection } = require("./configs/db");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { signupController } = require("./controllers/signup.controller");
const { loginController } = require("./controllers/login.controller");
const { ticketController } = require("./controllers/ticket.controller");


app.use(cors());
app.use(express.json());
app.use("/user/signup", signupController);
app.use("/user/login", loginController);
app.use("/ticket",ticketController)

const PORT = process.env.PORT || 7500;

app.get("/", (req, res) => {
  res.send("welcome to masai");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("running on http://localhost:7500");
  } catch (error) {
    console.log(error);
  }
});
