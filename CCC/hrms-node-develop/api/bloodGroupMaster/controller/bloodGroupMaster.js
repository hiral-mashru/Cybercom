const bloodGroupModel = setup.models.bloodgroupmaster
const Op = require('sequelize').Op

module.exports = {

    // Usage : To get list of all the blood groups
    // request query
    // page : page number
    // limit : number of blood groups
    // title : search for title of blood group
    // orderBy : Inputs to sort in ascending or descending order. ('asc' for ascending and 'desc' for descending)
    // sortBy : Inputs the field name on which the sorting needs to be done

    listBloodGroup: async(req,res,next) => {
        try{
            var options = setup.modulefunctions['bloodGroupMaster']['pagination']['options'](req.query)
            const bloodGroupList = await bloodGroupModel.findAll(options)
            var data = setup.services['PaginationData']['getPaginationData'](req.query,bloodGroupList)
            if(bloodGroupList.length===0){
                res.status(200).json({
                    status: 0,
                    message: "There is no blood groups"
                })
            } else
            if(data.data.length === 0){
                res.status(200).json({
                    status: 0,
                    message: "Page limit is: "+data.totalPages
                })
            } else {
                res.status(200).json({
                    status: 1,
                    message: data
                })
            }
        } catch(err){
            res.status(500).json({
                status: 0,
                error: err.message
            })
            next(err.message)
        }
    },

    listBloodGroup1: async (req,res,next)=>{
        try{
            const page = parseInt(req.query.page,10) || 1
            const limit = parseInt(req.query.limit,10) || 5
            const offset = page ? (page * limit) - limit : 0;
            const order  = []
            if(req.query.sortBy && req.query.orderBy){
                order.push(req.query.sortBy,req.query.orderBy)
            }
            var condition = req.query.title ? { title: { [Op.like]: `%${req.query.title}%` } } : null;
            const bloodGroupList = await bloodGroupModel.findAll({ where: condition, order: [order] })
            var data = {}
            let start = (page-1)*limit
            let end = page*limit
            if(start > 0){
                data.previous = {
                    page: page-1,
                    limit: limit
                }
            }
            if(end < bloodGroupList.length){
                data.next = {
                    page: page+1,
                    limit: limit
                }
            }
            data.totalPages = Math.ceil(bloodGroupList.length / limit);
            data.totalItems = bloodGroupList.length
            data.limit = limit
            data.currentPage = page
            data.orderBy = req.query.orderBy
            data.sortBy = req.query.sortBy
            data.data = bloodGroupList.slice(start,end)
            if(bloodGroupList.length === 0){
                res.status(200).json({
                    status: 0,
                    message: "There is no blood groups"
                })
            } else 
            if(bloodGroupList){
                res.status(200).json({
                    status: 1,
                    message: data
                })
            }
        } catch(err){
            res.status(500).json({
                status: 0,
                error: err.message
            })
            next(err.message)
        }
    },

    // Usage : To create new blood group
    // request query
    // title : Title of Blood Group
    // isActive : Check if Blood group is active or not
    createBloodGroup: async (req,res,next) =>{
        try{
            if(req.body.title){
                const bloodGroup = await bloodGroupModel.create(req.body)
                if(bloodGroup){
                    res.status(201).json({
                        status: 1,
                        message: 'Blood Group saved successfully...'
                    })
                } else {
                    res.status(500).json({
                        status: 0,
                        message: 'Blood Group can not be saved...'
                    })
                }
            } else {
                res.status(500).json({
                    status: 0,
                    message: 'Please provide title.'
                })
            }
        } catch(err){
            res.status(500).json({
                status: 0,
                error: err.message
            })
            next(err.message)
        }
    },

    // Usage : To update blood group by ID
    // request param
    // id: Blood Group Id
    // request query
    // title : Title of Blood Group
    // isActive : Check if Blood group is active or not
    changeBloodGroupById: async (req,res,next)=>{
        try {
            const bloodGroupById=await bloodGroupModel.findOne({
                where:{
                    id: {
                        [Op.eq] : req.params.id
                    }
                }
            });
            if(bloodGroupById){
                const changedBloodGrp = await bloodGroupModel.update(req.body,{
                    where:{
                        id:{
                            [Op.eq] : req.params.id
                        }
                    }
                });
                if(changedBloodGrp){
                    res.status(201).json({
                        status: 1,
                        message:'Blood Group updated successfully'
                    })
                }else{
                    res.status(500).json({
                        status: 1,
                        message:'Blood Group cannot be updated'
                    })
                }
            } else { 
                res.status(500).json({
                    status: 0,
                    message: 'There is no such blood group exists...'
                })
            }
        } catch (err) {
            res.status(500).json({
                status: 0,
                error: err.message
            })
            next(err.message)
        }
    },

    // Usage : To delete blood group by ID
    // request param
    // id: Blood Group Id
    deleteBloodGroupById: async (req,res,next) => {
        try {
            const bloodGrpById = await bloodGroupModel.findOne({
                where:{
                    id: {
                        [Op.eq] : req.params.id
                    }
                }
            })
            if(bloodGrpById){
                const deleteBloodGrp = await bloodGroupModel.destroy({
                    where:{
                        id: {
                            [Op.eq] : req.params.id
                        }
                    }
                })
                if(deleteBloodGrp){
                    res.status(200).json({
                        status: 1,
                        message:'Blood Group deleted Successfully'
                    })
                }else{
                    res.status(500).json({
                        status: 0,
                        message:'Blood Group cannot be deleted...'
                    })
                }
            } else {
                res.status(500).json({
                    status: 0,
                    message:'There is no such blood group exist...'
                })
            }
        } catch (err) {
            res.status(500).json({
                status: 0,
                error: err.message
            })
            next(err.message)
        }
    },

    // Usage : To get blood group by ID
    // request param
    // id: Blood Group Id
    findBloodGrpById: async (req,res,next) => {
        try {
            const findBloodGrp = await bloodGroupModel.findOne({
                where:{
                    id: {
                        [Op.eq] : req.params.id
                    }
                }
            });
            if(findBloodGrp){
                res.status(200).json({
                    status: 1,
                    data: findBloodGrp
                })
            } else {
                res.status(500).json({
                    status: 0,
                    message:"There is no such blood group exist"
                })
            }
        } catch (error) {
            res.status(500).json({
                status: 0,
                error: err.message
            })
            next(err.message)
        }
    
    }
}