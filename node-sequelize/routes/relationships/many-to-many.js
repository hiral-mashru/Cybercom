const express = require('express')
const actorModel = require('../../models').Actor
const roleModel = require('../../models').Role
const actorRoleModel = require('../../models').ActorRole

const router = express.Router()

// get all roles with their respective actors
router.get("/roles",(req,res)=>{
    roleModel.findAll({
        include: {
            model: actorModel,
            attributes: ["name"],
            through: {
                model: actorRoleModel
            }
        }
    }).then(data=>{
        res.status(200).json({
            status: 1,
            data: data
        })
    })
})

// get all actors with their respective roles
router.get("/actors",(req,res)=>{
    actorModel.findAll({
        include: {
            model: roleModel,
            attributes: ["id","name"],
            through: {
                model: actorRoleModel
            }
        }
    }).then(data=>{
        res.status(200).json({
            status: 1,
            data: data
        })
    })
})

module.exports = router
