// const { Sequelize, DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("people",{
        freezeTableName: true,
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
