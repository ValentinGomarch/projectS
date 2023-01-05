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
const db = require("./src/database/models")
const mainRouter = require("./src/routers/mainRouter");
const app = express()


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

(async () => {
    await db.sequelize.sync()
})();

app.listen("3000", () =>{
    console.log("Todo sobre ruedas")
})

app.use("/", mainRouter);