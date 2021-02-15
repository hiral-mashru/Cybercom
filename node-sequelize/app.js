const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const Sequelize = require('sequelize')

app.use(bodyParser.json())

//connection with mysql database
const sequelize = new Sequelize("practice","root","",{
    host: "localhost",
    dialect: "mysql"
})

//check database connection 
sequelize.authenticate().then(function(success){ //it's promise based method
    console.log("Successfully conected with database")
}).catch(function(err){
    console.log("error while connecting the database", err)
})

/************************************* 
//create model => first way to create models in sequelize
var User = sequelize.define("tbl_users",{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING
    },
    rollNo: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.ENUM("1","0"),
        defaultValue: "1"
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    }
},{
    modelName: "User",
    timestamps: false //do not create createdat, updatedat columns
})

//sync model
sequelize.sync()
*/

//create models using second way
const Model = Sequelize.Model

//User Model
class User extends Model {}
User.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING
    },
    rollNo: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.ENUM("1","0"),
        defaultValue: "1"
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    }
},{
    modelName: "tbl_users",
    timestamps: false, //do not create createdat, updatedat columns
    sequelize
})

//Book Model
class Book extends Model {}
Book.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.ENUM("1","0"),
        defaultValue: "1"
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    }
},{
    modelName: "tbl_books",
    timestamps: false, //do not create createdat, updatedat columns
    sequelize
})

//sync model
sequelize.sync()

// create some data to table
app.post('/user', (req,res)=>{
    // User.create({
    //     name: "heer mashru",
    //     email: "heer@gmail.com",
    //     rollNo: 1,
    //     status: 1
    // }).then(function(response){
    //     res.status(200).json({     //query: why res instead of response
    //         status: 1,
    //         message: "User has been created successfully"
    //     })
    // }).catch(function(err){
    //     console.log("error in inserting the data: ", err)
    // })
    User.create(req.body).then(function(response){
        res.status(200).json({
            status: 1,
            message: "User has been created"
        }).catch(function(error){
            console.log(error)
        })
    })
})

app.get('/',(req,res)=>{
    res.status(200).json({
        status: 1,
        message: 'Welcome to Home Page'
    })
})

app.listen(8000,()=>{
    console.log("App is running...")
})