const companyModel=setup.models.companymaster;
module.exports={
  //Uasge:To get list of all the companies
  //request query
  //page:page number
  //limit:number of companies
  // orderBy : Inputs to sort in ascending or descending order. ('asc' for ascending and 'desc' for descending)
  // sortBy : Inputs the field name on which the sorting needs to be done
  showCompanies:async(req,res,next)=>{
    try {
      let {page,limit,sortBy,orderBy,name}=req.query;
      page=parseInt(page);
      limit=parseInt(limit);

      const order  = []
      if(sortBy && orderBy){
          order.push(sortBy);
          order.push(orderBy);
      }

      const startIndex=(page-1)*limit;
      const endIndex=page*limit;

      let companies;
      if(order.length!=2){
        companies= await companyModel.findAll();
      }else{
        companies= await companyModel.findAll({order:[order]});
      }
      let results={};
      if(endIndex<companies.length){
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

      if(companies){
        let data;
        if(page && limit){
           data=companies.slice(startIndex,endIndex);
        }else{
          data=companies;
        }
        results.result=data;
        res.status(200).json({
          message:"List of all Companies",
          data:results
        })
      }else{
        res.status(500).json({
          message:"Unable to get companies data"
        })
      }
    } catch (error) {
      next(error);
    }
  },
  //Usage:To create a New Company
  createCompany:async(req,res,next)=>{
    try {
      const {
        name,
        website,
        noOfEmployees,
        contactNumber,
        contactEmail,
        streetLine1,
        streetLine2,
        area,
        city,
        postalCode,
        state,
        country,
        appraisalCycle,
        noticePeriod,
        bondDurationForExperienced,
        bondDurationForFreshers,
        weekends,
        notes,
        isActive
      }=req.body;
      if(name.trim() && website.trim() && noOfEmployees && contactNumber.trim() && contactEmail.trim() && streetLine1.trim() && area.trim() && city.trim() && postalCode.trim() && state.trim() && country.trim()){
        const company=await companyModel.create(req.body);
        if(company){
          res.status(201).json({
            message:'Company created Successfully'
          })
        }else{
          res.status(500).json({
            message:'Unable to create a Company'
          })
        }
      }else{
        res.status(500).json({
          message:'Please fill out all the required fields'
        })
      }
    } catch (error) {
      next(error);
    }
  },
  //Usage:To update a company by company id
  //request params
  //id:companyId
  updateCompanyById:async(req,res,next)=>{
    try {
      const id=req.params.id;
      const company=await companyModel.findOne({
        where:{
          id:id
        }
      });
      if(company){
        const updatedCompany=await companyModel.update(req.body,{
          where:{
            id:id
          }
        })
        if(updatedCompany){
          res.status(201).json({
            message:'Company updated Successfully'
          })
        }else{
          res.status(500).json({
            message:'Unable to update Company'
          })
        }
      }else{
        res.status(500).json({
          message:'No such company exist'
        })
      }
    } catch (error) {
      next(error);
    }
  },
  //Usage:To delete a company by company id
  //request params
  //id:companyId
  deleteCompanyById:async(req,res,next)=>{
    try {
      const id=req.params.id;
      const company=await companyModel.findOne({
        where:{
          id:id
        }
      });

      if(company){
        const deletedCompany=await companyModel.destroy({
          where:{
            id:id
          }
        });
        if(deletedCompany){
          res.status(200).json({
            message:'Successfully deleted a company'
          })
        }else{
          res.status(500).json({
            message:'Unable to delete Company'
          })
        }
      }else{
        res.status(500).json({
          message:'No such company exist'
        })
      }
    } catch (error) {
      next(error);
    }
  },
  //Usage:To show a particular company by company id
  //request params
  //id:comapnayId
  showCompanyById:async(req,res,next)=>{
    try {
      const id=req.params.id;
      const company=await companyModel.findOne({
        where:{
          id:id
        }
      })
      if(company){
        res.status(200).json({
          message:'Company profile',
          data:company
        })
      }else{
        res.status(500).json({
          message:'No such Company Exist'
        })
      }
    } catch (error) {
      next(error);
    }
  }
}
