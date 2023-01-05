const Sequelize = require('sequelize');
const config = require('../config/db-config.js')

const sequelize = new Sequelize(
config.database,
config.username,
config.password,
{
  host: config.host,
  dialect: config.dialect
});

const db = {}


db.Sequelize = Sequelize;
db.sequelize = sequelize
db.models = {}
db.models.User = require("./user")(sequelize, Sequelize.DataTypes)



//Comprobar la conexion con la Base de datos
sequelize.authenticate().then(() => {
  console.log("Conexion establecidad")})
.catch((error)=>{
  console.log(error)
});



module.exports = db;
