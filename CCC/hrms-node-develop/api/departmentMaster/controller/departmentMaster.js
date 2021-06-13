const departmentModel=setup.models.departmentmaster;
const {Op}=require('sequelize');
module.exports={
  //Usage: To create a new department
  //request body
  //title: Title of the department
  //isActive: Boolean(true/false) Department is active or not
  createDepartment:async(req,res,next)=>{
    try {
      const {title,isActive}=req.body;
      if(title.trim()){
        const alreadyExist=await departmentModel.findOne({
          where:{
            title:title
          }
        })

        if(!alreadyExist){
          const department=await departmentModel.create({
            title:title,
            isActive:isActive
          });
          if(department){
            res.status(201).json({
              messsage:"Department saved successfully"
            });
          }else{
            res.status(500).json({
              message:"Unable to save the department"
            })
          }  
        }else{
          res.status(409).json({
            "error":"Department already Exist"
          })
        }
      }else{
        res.status(500).json({
          message:"Please fill out all the required fields"
        })
      }
    } catch (error) {
      next(error);
    }
  },
  //Usage: To get list of departments
  //request query
  //limit: Number of department you want
  //page: Page Number
  // orderBy : Inputs to sort in ascending or descending order. ('asc' for ascending and 'desc' for descending)
  // sortBy : Inputs the field name on which the sorting needs to be done
  getDepartment:async(req,res,next)=>{
    try {
      let {page,limit,sortBy,orderBy}=req.query;
      page=parseInt(page);
      limit=parseInt(limit);
      
      const order  = []
      if(sortBy && orderBy){
          order.push(sortBy);
          order.push(orderBy);
      }

      const startIndex=(page-1)*limit;
      const endIndex=page*limit;

      let departments;
      if(order.length!=2){
        departments= await departmentModel.findAll();
      }else{
        departments= await departmentModel.findAll({order:[order]});
      }

      let results={};
      if(endIndex<departments.length){
        results.next={
            page:page+1,
            limit:limit 
        }
      } 
      if(startIndex>0){
          results.previous={
              page:page-1,
              limit:limit
          }
      }

      if(departments){
        let data;
        if(page && limit){
           data=departments.slice(startIndex,endIndex);
        }else{
          data=departments;
        }
        results.result=data;
        res.status(200).json({
          message:"List of departments",
          length:departments.length,
          data:results
        })
      }else{
        res.status(500).json({
          message:"Unable to retrieve the data"
        })
      }
    } catch (error) {
      next(error);
    }
  },
  //Usage: Update department by departmentId
  //request params
  //id: department id
  updateDepartmentById:async(req,res,next)=>{
    try {
      const id=req.params.id;
      const department=await departmentModel.findOne({
        where:{
          id:id
        }
      });
      if(department){
        const updatedDepartment=await departmentModel.update(req.body,{
          where:{
            id:id
          }
        });
        if(updatedDepartment){
          res.status(201).json({
            message:'Department updated successfully'
          })
        }else{
          res.status(500).json({
            message:'Unable to update'
          })
        }
      }else{
        res.status(500).json({
          message:'No such department exist'
        })
      }
    } catch (error) {
      next(err);
    }
  },
  //Usage: Delete department by departmentId
  //requestParams
  //id: department id
  deleteDepartmentById:async(req,res,next)=>{
    try {
      const id=req.params.id;
      const department=await departmentModel.findOne({
        where:{
          id:id
        }
      })
  
      if(department){
        const department=await departmentModel.destroy({
          where:{
            id:id
          }
        })
        
        if(department){
          res.status(200).json({
            message:'Department deleted Successfully'
          })
        }else{
          res.status.json({
            message:'Unable to delete department'
          })
        }
      }else{
        res.status(500).json({
          message:'No such department exist'
        })
      }
    } catch (error) {
      next(error);
    }

    
  },
  //Usage: Get particular department by departmentId
  //request params
  //id: department id
  getDepartmentById:async(req,res,next)=>{
    try {
      const id=req.params.id;
      const department=await departmentModel.findOne({
        where:{
          id:id
        }
      });
      if(department){
        res.status(200).json({
          message:'Department Exist',
          data:department
        })
      }else{
        res.status(404).json({
          error:`No department with id ${id}`
        })
      }
    } catch (error) {
      next(error);
    }

  }
}
