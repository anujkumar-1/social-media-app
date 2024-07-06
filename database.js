const Sequelize = require("sequelize")
const sequelize = new Sequelize("imgDB", "root", "Anujkumar@1", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize