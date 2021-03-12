'use strict';
// const funn = setup.functions["funcFile"]["func1"]
const studentModel = require('../../../db/models').students
const Op = require('sequelize').Op
module.exports = {
    welcome: (req,res,next) => {
        var params = "Hiral"
        if(res.status === 200){
            res.status(200).json({
                status: 1,
                message: "Welcome",
                data: setup.functions["funcFile"]["func2"](params),
                service: setup.services["RV"]["serve"]["service1"](params)
            })
        } else {
            next()
        }
        
    },
    globall: setup.functions["funcFile"]["func1"],
    getData: (req,res,next) => {
        studentModel.findAll({
            where: {
                email: {
                    [Op.eq]: req.body.email
                }
            }
        }).then(data=>{
            if(data){
                res.json({
                    data: data
                })
            } else {
                next()
            }
        })
    }, 
    insert: (req,res,next)=>{
        studentModel.create({
            name: req.body.name,
            email: req.body.email
        }).then(user=>{
            // res.status(500).send('Something broke')
            res.status(200).json({
                status: 1,
                message: "Student created successfully"
            })
        }).catch(err=>{
            // console.log("Error")
            // res.locals.url = req.url
            // res.locals.err = err
            res.json({data: err.errors})
            next(new Error(('provide required fields '+err+' enddd')))
        })
    }
}

// function findObjectByKey(array, key, value) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i][key] === value) {
//             return array[i];
//         }
//     }
//     return null;
// }
// var obj = findObjectByKey(objArray, 'id', 3);