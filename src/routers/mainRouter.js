const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController.js");

router.get("/", mainController.index);
router.get("/register", mainController.register)
router.get("/login", mainController.login)

router.post("/register", mainController.userController.create)


module.exports = router;
