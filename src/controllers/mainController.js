const path = require("path");
const userController = require("./userController")

const mainController = {
  index: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"))
  },

  register: (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/register.html"))
  },

  login: (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/login.html"))
  },
  userController: userController
};


module.exports = mainController;
