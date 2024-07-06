const sequelize = require("./database")
const {Sequelize, DataTypes}= require("sequelize")

const imgDB = sequelize.define("imgTable", {
    imgUrl:{
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    imgText:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = imgDB
