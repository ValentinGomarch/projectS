const { models: { User } } = require("../database/models");

const userController = {
  create: async(req, res) => {
        console.log(req.body)
        if(req.body.first_name && req.body.last_name && req.body.email && req.body.password){
            const {first_name,last_name,email,password} = req.body;
            await User.create({
            first_name,
            last_name,
            email,
            password
        })
        }
        
        res.send("Usuario registrado")
        console.log(req.body)
  }
};

module.exports = userController