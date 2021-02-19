const express = require('express')
const stuffModel = require('../../models').Stuff;
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

const router = express.Router()

router.get('/stuff',(req,res)=>{

    stuffModel.findAll({
        /*attributes: ["id","name"],
        limit: 10, //total count of products we want at request
        offset: 4, //we are setting out first index value
        // order: [["id","DESC"]],
        order: [["name","ASC"]],*/
        where: {
            // id: 414,
            id: {
                // [Op.eq]: 414, // id = 414
                // [Op.between]: [414,419],
                // [Op.gt]: 440, // id > 440
                // [Op.gte]: 440, // id >= 440
                // [Op.lt]: 450, // id < 450
                [Op.or]: {
                    [Op.gte]: 440,
                    [Op.lt]: 450,
                }
            },
            [Op.or]: {
                id: {
                    [Op.eq]: 450
                },
                name: {
                    [Op.eq]: "Handcrafted Frozen Pizza"
                }
            },
            [Op.and]: {
                id: {
                    [Op.eq]: 450
                },
                name: {
                    [Op.eq]: "Small Rubber Car"
                }
            },
            // name: {
            //     [Op.like]: "P%", // name starts with 'P'
            //     [Op.like]: "%Bac%", //name starts with 'P' and contains 'Bac'
            // }
        }
    }).then(data=>{
        if(data){
            res.status(200).json({
                status: 1,
                message: "Product page",
                data: data
            })
        } else {
            res.status(200).json({
                status: 0,
                message: "No Products found"
            })
        }
    })
})

module.exports = router