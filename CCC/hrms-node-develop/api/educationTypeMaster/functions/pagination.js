const Op = require('sequelize').Op 
module.exports = {

  options: (query)=>{
    var options = {}
    options.where = {}
    query.title ? options.where.title = { [Op.like]: `%${query.title}%` } : null;
    query.id ? options.where.id = [ ...query.id.split(',') ] : null;
    const order  = []
    if(query.sortBy && query.orderBy){
      order.push(query.sortBy,query.orderBy)
      options.order = [order]
      return options
    }
    return options;
  }
}