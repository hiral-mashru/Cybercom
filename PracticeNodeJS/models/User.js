// const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define("people",{
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    })
    console.log('userr',User)
    return User;
}
