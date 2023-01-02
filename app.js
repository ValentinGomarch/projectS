const express = require("express");
const path = require("path");
const SneaksAPI = require("sneaks-api")
const sneaks = new SneaksAPI()
/* const methodOverride = require("method-override");
const session = require("express-session")
const validateLoggedInUserMW = require("./src/middlewares/validateLoggedInUserMW")
const rememberSessionMW = require("./src/middlewares/rememberSessionMW")
const cookies = require('cookie-parser');
const cors = require("cors"); */

const mainRouter = require("./src/routers/mainRouter");
const app = express()
app.use(express.static(path.join(__dirname, 'public')));


app.listen("3000", () =>{
    console.log("Todo sobre ruedas")
})

app.use("/", mainRouter);