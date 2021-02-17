const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const mysql2 = require('mysql2')

const app = express()
app.use(bodyParser.json())
// app.use((bodyParser.urlencoded({ extended: false })))

const sequelize = new Sequelize("restApi","root","",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(success){
    console.log("connection successfully established with database")
}).catch(function(err){
    console.log("Error comes while connecting the database : ",err)
})

var Employee = sequelize.define("employee",{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contactNo: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    altContactNo: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    designation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    yearsOfExperience: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    joiningDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    currentAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pinCode: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    panNumber: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    adharNumber: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    passportNumber: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    modelName: "Employee",
    // timestamps: false
    paranoid: true,
    // If you want to give a custom name to the deletedAt column
    deletedAt: 'destroyTime'
})

sequelize.sync()

app.post('/employee', (req,res)=>{
    if(typeof req.body.firstName === 'string' && typeof req.body.lastname === 'string' && typeof req.body.email === 'string' && typeof req.body.contactNo ==='number' && typeof req.body.altContactNo ==='number' && typeof req.body.designation === 'string' && typeof req.body.yearsOfExperience ==='number' && typeof req.body.currentAddress === 'string' && typeof req.body.city === 'string' && typeof req.body.state === 'string' && typeof req.body.pinCode ==='number' && typeof req.body.panNumber ==='number' && typeof req.body.adharNumber ==='number' && typeof req.body.passportNumber ==='string'){
        // var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var atposition=req.body.email.indexOf("@");  
        var dotposition=req.body.email.lastIndexOf(".");    
        if(!(atposition<1 || dotposition<atposition+2 || dotposition+2>=req.body.email.length)){
            if((req.body.contactNo.toString().length) == 10 && (req.body.altContactNo.toString().length) == 10 && (req.body.pinCode.toString().length) == 6 && (req.body.panNumber.toString().length) == 10 && (req.body.adharNumber.toString().length) == 12 && (req.body.passportNumber.length) == 8){
                Employee.create(req.body).then(function(response){
                    res.status(200).json({
                        status: 1,
                        message: "Employee has been created"
                    })
                }).catch(function(error){
                    console.log(error)
                })
            } else {
                console.log("invalid length")
            }
        } else {
            console.log("invalid mail")
        }
    } else {
        res.json({
            message: "All fileds should be filled with correct values"
        })
    }

    // Employee.create(req.body).then(function(response){
    //     res.status(200).json({
    //         status: 1,
    //         message: "Employee has been created"
    //     })
    // }).catch(function(error){
    //     console.log(error)
    // })
})

//soft-deletion
app.delete('/soft-delete-employee',function(req,res){
    Employee.destroy({
        where: {
            id: 3
        }
    }).then(function(success){
        console.log("Employee has been deleted")
    }) // UPDATE "posts" SET "deletedAt"=[timestamp] WHERE "deletedAt" IS NULL AND "id" = 3
    .catch(function(error){
        console.log(error)
    })
})

//If you really want a hard-deletion and your model is paranoid, you can force it 
//using the force: true option:
//hard-deletion
app.delete('/hard-delete-employee',function(req,res){
    Employee.destroy({
        where: {
            id: 3
        },
        force: true
    }).then(function(success){
        console.log("Employee has been deleted")
    })
    .catch(function(error){
        console.log(error)
    })
})


app.listen(8000)


// {
// 	"firstName": "harsh",
// 	"lastname": "mashru",
// 	"email": "h@gmail.com",
// 	"contactNo": 9426254817,
// 	"altContactNo": 8780802117,
// 	"designation": "CE",
// 	"yearsOfExperience": 1,
// 	"currentAddress": "dfgvbhnj",
// 	"city": "rajkot",
// 	"state": "gujarat",
// 	"pinCode": 360005,
// 	"panNumber": 1234567890,
// 	"adharNumber": 298765564321,
// 	"passportNumber": "cfh34567"
// }