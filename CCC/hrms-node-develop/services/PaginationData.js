module.exports = {
    getPaginationData: (query,list)=>{
        var data = {}
        const page = parseInt(query.page,10) || 1
        const limit = parseInt(query.limit,10) || 5
        const offset = page ? (page * limit) - limit : 0;
        let start = (page-1)*limit
        let end = page*limit
        if(start > 0){
          data.previous = {
            page: page-1,
            limit: limit
          }
        }
        if(end < list.length){
          data.next = {
            page: page+1,
            limit: limit
          }
        }
        data.totalPages = Math.ceil(list.length / limit);
        data.totalItems = list.length
        data.limit = limit
        data.currentPage = page
        data.orderBy = query.orderBy
        data.sortBy = query.sortBy
        data.data = list.slice(start,end)
        return data;
      }
}