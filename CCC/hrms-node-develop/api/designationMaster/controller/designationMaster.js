const designationModel=setup.models.designationmaster;
module.exports={
  //Usage: To create a new designation
  //request body
  //title: Title of the designation
  //isActive: Boolean(true/false) Designation is active or not
  createDesignation:async(req,res,next)=>{
    try {
      const {title,isActive}=req.body;
      if(title.trim()){
        const alreadyExist=await designationModel.findOne({
          where:{
            title:title
          }
        });
        if(alreadyExist){
          res.status(409).json({
            "error":"Designation already Exist"
          })
        }else{
          const designation=await designationModel.create({
            title:title,
            isActive:isActive
          });
          if(designation){
            res.status(201).json({
              messsage:"Designation saved successfully"
            });
          }else{
            res.status(500).json({
              message:"Unable to save the designation"
            })
          }
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
  //Usage: To get list of designations
  //request query
  //limit: Number of designation you want
  //page: Page Number
  // orderBy : Inputs to sort in ascending or descending order. ('asc' for ascending and 'desc' for descending)
  // sortBy : Inputs the field name on which the sorting needs to be done
  getAllDesignation:async(req,res,next)=>{
    try {
      let {page,limit,sortBy,orderBy}=req.query;
      page=parseInt(page);
      limit=parseInt(limit);

      const order  = []
      if(sortBy && orderBy){
          order.push(sortBy);
          order.push(orderBy);
      }

      let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
      const startIndex=(page-1)*limit;
      const endIndex=page*limit;

      let designations;
      if(order.length!=2){
         designations= await designationModel.findAll({where:condition});
      }else{
         designations= await designationModel.findAll({where:condition,order:[order]});
      }


      let results={};
      if(endIndex<designations.length){
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

      if(designations){
        let data;
        if(page && limit){
           data=designations.slice(startIndex,endIndex);
        }else{
          data=designations;
        }
        results.result=data;
        res.status(200).json({
          message:"List of designations",
          length:designations.length,
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
  //Usage: Update designation by designationId
  //request params
  //id: designation id
  updateDesignationById:async(req,res,next)=>{
    try {
      const id=req.params.id;
      const designation=await designationModel.findOne({
        where:{
          id:id
        }
      });
      if(designation){
        const updatedDesignation=await designationModel.update(req.body,{
          where:{
            id:id
          }
        });
        if(updatedDesignation){
          res.status(201).json({
            message:'Designation updated successfully'
          })
        }else{
          res.status(500).json({
            message:'Unable to update'
          })
        }
      }else{
        res.status(500).json({
          message:'No such designation exist'
        })
      }
    } catch (error) {
      next(error);
    }
  },
  //Usage: Delete designation by designationId
  //requestParams
  //id: designation id
  deleteDesignationById:async(req,res,next)=>{
    try {
      const id=req.params.id;
      const designation=await designationModel.findOne({
        where:{
          id:id
        }
      })
  
      if(designation){
        const designation=await designationModel.destroy({
          where:{
            id:id
          }
        })
        
        if(designation){
          res.status(200).json({
            message:'Designation deleted Successfully'
          })
        }else{
          res.status.json({
            message:'Unable to delete designation'
          })
        }
      }else{
        res.status(500).json({
          message:'No such designation exist'
        })
      }
    } catch (error) {
      next(error);
    }
  },
  //Usage: Get particular designation by designationId
  //request params
  //id: designation id
  getDesignationById:async(req,res,next)=>{
    try {
      const id=req.params.id;
      const designation=await designationModel.findOne({
        where:{
          id:id
        }
      });
      if(designation){
        res.status(200).json({
          message:'Designation Exist',
          data:designation
        })
      }else{
        res.status(404).json({
          error:`No designation with id ${id}`
        })
      }
    } catch (error) {
      next(error);
    }

  }
}
