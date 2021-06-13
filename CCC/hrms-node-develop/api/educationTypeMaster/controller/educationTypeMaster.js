const educationTypeModel = setup.models.educationtypemaster
const Op = require('sequelize').Op

module.exports = {

    // Usage : To get list of all the education types
    // request query
    // page : page number
    // limit : number of education types
    // title : search for title of education type
    // orderBy : Inputs to sort in ascending or descending order. ('asc' for ascending and 'desc' for descending)
    // sortBy : Inputs the field name on which the sorting needs to be done
    listEducationType: async (req,res,next)=>{
        try{
            var options = setup.modulefunctions['educationTypeMaster']['pagination']['options'](req.query)
            const educationTypeList = await educationTypeModel.findAll(options)
            var data = setup.services['PaginationData']['getPaginationData'](req.query,educationTypeList)
            if(educationTypeList.length===0){
                res.status(200).json({
                    status: 0,
                    message: "There is no education types"
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

    // Usage : To create new education type
    // request query
    // title : Title of Education Type
    // isActive : Check if Education Type is active or not
    createEducationType: async (req,res,next) =>{
        try{
            if(req.body.title){
                const educationType = await educationTypeModel.create(req.body)
                if(educationType){
                    res.status(201).json({
                        status: 1,
                        message: 'Education Type saved successfully...'
                    })
                } else {
                    res.status(500).json({
                        status: 0,
                        message: 'Education Type can not be saved...'
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

    // Usage : To update education type by ID
    // request param
    // id: Education Type Id
    // request query
    // title : Title of Education Type
    // isActive : Check if Education Type is active or not
    changeEducationTypeById: async (req,res,next)=>{
        try {
            const educationTypeById = await educationTypeModel.findOne({
                where:{
                    id: {
                        [Op.eq] : req.params.id
                    }
                }
            });
            if(educationTypeById){
                const changedEducationType = await educationTypeModel.update(req.body,{
                    where:{
                        id:{
                            [Op.eq] : req.params.id
                        }
                    }
                });
                if(changedEducationType){
                    res.status(201).json({
                        status: 1,
                        message:'Education Type updated successfully'
                    })
                }else{
                    res.status(500).json({
                        status: 1,
                        message:'Education type cannot be updated'
                    })
                }
            } else { 
                res.status(500).json({
                    status: 0,
                    message: 'There is no such education type exists...'
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

    // Usage : To delete education type by ID
    // request param
    // id: Education Type Id
    deleteEducationTypeById: async (req,res,next) => {
        try {
            const educationTypeById = await educationTypeModel.findOne({
                where:{
                    id: {
                        [Op.eq] : req.params.id
                    }
                }
            })
            if(educationTypeById){
                const deleteEducationType = await educationTypeModel.destroy({
                    where:{
                        id: {
                            [Op.eq] : req.params.id
                        }
                    }
                })
                if(deleteEducationType){
                    res.status(200).json({
                        status: 1,
                        message:'Education type deleted Successfully'
                    })
                }else{
                    res.status(500).json({
                        status: 0,
                        message:'Education type cannot be deleted...'
                    })
                }
            } else {
                res.status(500).json({
                    status: 0,
                    message:'There is no such education type exists...'
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

    // Usage : To get education type by ID
    // request param
    // id: Education Type Id
    findEducationTypeById: async (req,res,next) => {
        try {
            const findEducationType = await educationTypeModel.findOne({
                where:{
                    id: {
                        [Op.eq] : req.params.id
                    }
                }
            });
            if(findEducationType){
                res.status(200).json({
                    status: 1,
                    data: findEducationType
                })
            } else {
                res.status(500).json({
                    status: 0,
                    message:"There is no such education type exists"
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