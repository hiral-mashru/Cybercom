
 /**
 * @api {get} /listEducationTypes List of Education Types
 * @apiName EducationTypeList
 * @apiGroup EducationTypeMaster
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
 *   "message": [
 *       {
 *       "previous": {
 *           "page": 1,
 *           "limit": 3
 *       },
 *       "next": {
 *           "page": 3,
 *           "limit": 3
 *       },
 *      "totalPages": 1,
 *      "totalItems": 1,
 *      "limit": 5,
 *      "currentPage": 1,
 *      "orderBy" : "asc",
 *      "sortBy" : "id",
 *      "data": [
 *          {
 *              "id": 1,
 *              "title": "Work from home",
 *              "isActive": false,
 *              "createdDate": "2021-04-27T18:39:01.000Z",
 *              "updatedDate": "2021-04-28T07:53:25.000Z",
 *              "deletedDate": null
 *         }
 *      ]
 *     }
 *   ]
 * }
 */

 /**
 * @api {post} /educationType Create new education type
 * @apiName CreateNewEducationType
 * @apiGroup EducationTypeMaster
 * 
 * @apiParam {String} title Title of Education Type
 * @apiParam {Boolean} isActive Check if Education type is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "status": 1,
 *   "message": "Education Type saved successfully..."
 * }
 */

 /**
 * @api {put} /updateEducationType/:id Update Education Type by given ID
 * @apiName UpdateEducationType
 * @apiGroup EducationTypeMaster
 * 
 * 
 * @apiParam {Number} id Education Type Id
 * @apiParam {String} title Title of Education Type
 * @apiParam {Boolean} isActive Check if Education Type is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "status": 1,
 *   "message": "Education Type updated successfully"
 * }
 */

 /**
 * @api {delete} /deleteEducationType/:id Delete Education Type by given Id
 * @apiName DeleteEducationType
 * @apiGroup EducationTypeMaster
 * 
 * 
 * @apiParam {Number} id Education Type Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *    "status": 1,
 *   "message": "Education Type deleted Successfully"
 * }
 */

/**
 * @api {get} /getEducationType/:id Get particular education type by given Id
 * @apiName GetEducationTypeById
 * @apiGroup EducationTypeMaster
 * 
 * 
 * @apiParam {Number} id Education Type Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "status": 1,
 *   "data": {
 *       "id": 1,
 *       "title": "Work from home",
 *       "isActive": true,
 *       "createdDate": "2021-04-28T07:29:44.000Z",
 *       "updatedDate": "2021-04-28T07:29:44.000Z",
 *       "deletedDate": null
 *   }
 * }
 */

