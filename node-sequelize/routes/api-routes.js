const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')

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


// //create models using second way
// const Model = Sequelize.Model

// //User Model
// class User extends Model {}
// User.init({
//     id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     email: {
//         type: Sequelize.STRING
//     },
//     rollNo: {
//         type: Sequelize.INTEGER
//     },
//     status: {
//         type: Sequelize.ENUM("1","0"),
//         defaultValue: "1"
//     },
//     created_at: {
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
//     },
//     updated_at: {
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
//     }
// },{
//     modelName: "tbl_users",
//     timestamps: false, //do not create createdat, updatedat columns
//     sequelize
// })

// //Book Model
// class Book extends Model {}
// Book.init({
//     id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     amount: {
//         type: Sequelize.INTEGER
//     },
//     status: {
//         type: Sequelize.ENUM("1","0"),
//         defaultValue: "1"
//     },
//     created_at: {
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
//     },
//     updated_at: {
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
//     }
// },{
//     modelName: "tbl_books",
//     timestamps: false, //do not create createdat, updatedat columns
//     sequelize
// })

// //sync model
// sequelize.sync()


// create some data to table
router.post('/user', (req,res)=>{
    // console.log(req.body); return false;

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
        })
    }).catch(function(error){
        console.log(error)
    })
})

//bulk create
router.post("/bulk-user",function(req,res){
    User.bulkCreate([
        {
            name: "heer mashru1",
            email: "heer1@gmail.com",
            rollNo: 1,
            status: 1
        },
        {
            name: "heer mashru2",
            email: "heer2@gmail.com",
            rollNo: 2,
            status: 1
        },
        {
            name: "heer mashru3",
            email: "heer3@gmail.com",
            rollNo: 3,
            status: 1
        }
    ]).then(function(response){
        res.status(200).json({
            status: 1,
            message: "User has been created"
        })
    }).catch(function(error){
        console.log(error)
    })
})

//get all users
router.get('/users',(req,res)=>{
    User.findAll({ 
        where: {
            status: "1"
        }
    }).then((users)=>{
        res.status(200).json({
            status: 1,
            message: "Users found",
            data: users
        })
    }).catch((error)=>{
        console.log(error)
    })
})

//update api method
router.put('/user',(req,res)=>{
    User.update({
        name: req.body.name,
        email: req.body.email,
        rollNo: req.body.rollNo
    },{
        where: {
            id: req.body.id
        }
    }).then(response => {
        res.status(200).json({
            status: 1,
            message: 'User has been updated'
        })
    }).catch(error=>{
        res.status(500).json({
            status: 0,
            message: 'Failed to update user',
            data: error
        })
    })
})

//delete api method
router.delete('/user/:id',function(req,res){
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.status(200).json({
            status: 1,
            message: 'User has been deleted'
        })
    }).catch(error => {
        res.status(500).json({
            status: 0,
            message: 'Failed to delete user',
            data: error
        })
    })
})

//rawquery to select data
router.get('/user-select-raw', function(req,res){
    sequelize.query("SELECT * FROM tbl_users",{
        type: sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.status(200).json({
            status: 1,
            message: "Users found",
            data: response
        }).catch(error => {
            console.log(error)
        })
    }).catch(error => {
        console.log("error")
    })
})

//rawquery to update data
router.put('/user-update-raw', function(req,res){
    sequelize.query("UPDATE tbl_users SET name = '"+req.body.name+"', email = '"+req.body.email+"' WHERE id = "+req.body.id,{
        type: sequelize.QueryTypes.UPDATE
    }).then(response=>{
        res.status(200).json({
            status: 1,
            message: "Users updated successfully",
        }).catch(error => {
            console.log(error)
        })
    }).catch(error => {
        console.log("error")
    })
})

//rawquery to delete data
router.delete('/user-delete-raw/:id', function(req,res){
    sequelize.query("DELETE from tbl_users WHERE id = "+req.params.id,{
        type: sequelize.QueryTypes.DELETE
    }).then(response=>{
        res.status(200).json({
            status: 1,
            message: "Users deleted successfully",
        }).catch(error => {
            console.log("error")
        })
    }).catch(error => {
        console.log("error")
    })
})



router.get('/',(req,res)=>{
    res.status(200).json({
        status: 1,
        message: 'Welcome to Home Page'
    })
})

module.exports = router
