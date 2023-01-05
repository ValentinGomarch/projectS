const  sequelize  = require("sequelize");

module.exports = (sequelize, dataTypes) =>{
    const alias = "Users";
    const cols = {
        id :{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: dataTypes.STRING(50)
        },
        last_name: {
            type: dataTypes.STRING(50)
        },
        email: {
            type: dataTypes.STRING(128)
        },
        password: {
            type: dataTypes.STRING(128)
        },
        rol:{
            type: dataTypes.INTEGER,
        }

     };
    const config = {
        timestamps : false
    };

    const user = sequelize.define(alias, cols, config);

    return user;
}