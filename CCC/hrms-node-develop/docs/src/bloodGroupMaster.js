
/**
 * @api {get} /listBloodGroups List of Blood Groups
 * @apiName BloodGroupList
 * @apiGroup BloodGroupMaster
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit number of information
 * @apiParam (Query Params) {String} sortBy Inputs the field name on which the sorting needs to be done
 * @apiParam (Query Params) {String} orderBy Inputs to sort in ascending or descending order. ('asc' for ascending and 'desc' for descending)  
 * @apiParam (Query Params) {String} title Get data related to given title
 * @apiParam (Query Params) {Number} id Get data of given ids (IDs can be seperated by ',')
 * 
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 OK
 * {
 *   "status": 1,
 *   "message": {
 *       "previous": {
 *           "page": 1,
 *           "limit": 3
 *       },
 *       "next": {
 *           "page": 3,
 *           "limit": 3
 *       },
 *       "totalPages": 4,
 *       "totalItems": 10,
 *       "limit": 3,
 *       "currentPage": 2,
 *       "orderBy" : "asc",
 *       "sortBy" : "id",
 *       "data": [
 *           {
 *               "id": 1,
 *               "title": "O+",
 *               "isActive": true,
 *               "createdDate": "2021-04-30T13:28:23.000Z",
 *               "updatedDate": "2021-04-30T13:28:23.000Z",
 *               "deletedDate": null
 *           }
 *    ]
 * }
 */

/**
 * @api {post} /bloodGroup Create new blood group
 * @apiName CreateNewBloodGroup
 * @apiGroup BloodGroupMaster
 * 
 * @apiParam {String} title Title of Blood Group
 * @apiParam {Boolean} isActive Check if Blood group is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "status": 1,
 *   "message": "Blood Group saved successfully..."
 * }
 */

/**
 * @api {put} /updateBloodGroup/:id Update Blood Group by given ID
 * @apiName UpdateBloodGroup
 * @apiGroup BloodGroupMaster
 * 
 * 
 * @apiParam {Number} id Blood Group Id
 * @apiParam {String} title Title of Blood group
 * @apiParam {Boolean} isActive Check if Blood group is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "status": 1,
 *   "message": "Blood Group updated successfully"
 * }
 */


/**
 * @api {delete} /deleteBloodGroup/:id Delete Blood group by given Id
 * @apiName DeleteBloodGroup
 * @apiGroup BloodGroupMaster
 * 
 * 
 * @apiParam {Number} id Blood group Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "status": 1,
 *   "message": "Blood Group deleted Successfully"
 * }
 */

/**
 * @api {get} /getBloodGroup/:id Get particular blood group by given Id
 * @apiName GetBloodGroupById
 * @apiGroup BloodGroupMaster
 * 
 * 
 * @apiParam {Number} id Blood Group Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "status": 1,
 *   "data": {
 *       "id": 1,
 *       "title": "B positive",
 *       "isActive": true,
 *       "createdDate": "2021-04-28T07:29:44.000Z",
 *       "updatedDate": "2021-04-28T07:29:44.000Z",
 *       "deletedDate": null
 *   }
 * }
 */