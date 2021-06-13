//list of all departments

/**
 * @api {get} /designation List of all the designation
 * @apiName DesignationList
 * @apiGroup Designation
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of designation to be returned
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * 
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 OK
 * {
 *   "message":"List of designations",
 *   "length":15,
 *   "data":{
 *   "next":{
 *          "page":3,
 *          "limit":3
 *       },
 *    "previous":{
 *          "page":1,
 *          "limit":3
 *       },
 *   "result":[
 *      {
 *          "id":4,
 *          "title":"SDE",
 *          "isActive":true,
 *          "createdDate":"2021-04-27T12:37:14.000Z",
 *          "updatedDate":"2021-04-27T12:37:14.000Z",
 *          "deletedDate":null
 *      },
 *      {
 *          "id":5,
 *          "title":"Tech Lead",
 *          "isActive":true,
 *          "createdDate":"2021-04-27T12:37:14.000Z",
 *          "updatedDate":"2021-04-27T12:37:14.000Z",
 *          "deletedDate":null
 *      },
 *      {
 *          "id":6,
 *          "title":"Devops",
 *          "isActive":true,
 *          "createdDate":"2021-04-27T12:37:14.000Z",
 *          "updatedDate":"2021-04-27T12:37:14.000Z",
 *          "deletedDate":null
 *      }
 *    ]
 *  }
 * }
 */

/**
 * @api {post} /designation Create a new Designation
 * @apiName CreateDesignation
 * @apiGroup Designation
 * 
 * @apiParam {String} title Designation title
 * @apiParam {Boolean} isActive Boolean to check whether the designation is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Designation saved successfully"
 * }
 */

/**
 * @api {put} /designation/:id Update Designation by designation Id
 * @apiName UpdateDesignation
 * @apiGroup Designation
 * 
 * 
 * @apiParam {Number} id Designation Unique Id
 * @apiParam {String} title Designation title
 * @apiParam {Boolean} isActive Boolean to check whether the designation is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Designation updated successfully"
 * }
 */

/**
 * @api {delete} /designation/:id Delete Designation by designation Id
 * @apiName DeleteDesignation
 * @apiGroup Designation
 * 
 * 
 * @apiParam {Number} id Designation Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Designation deleted successfully"
 * }
 */

/**
 * @api {get} /designation/:id Get particular Designation by designation Id
 * @apiName GetDesignationById
 * @apiGroup Designation
 * 
 * 
 * @apiParam {Number} id Designation Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Designation Exist",
 *   "data":{
 *      "id": 1,
 *      "title": "SDE",
 *      "isActive": true,
 *      "createdDate": "2021-04-27T12:37:14.000Z",
 *      "updatedDate": "2021-04-27T13:29:56.000Z",
 *      "deletedDate": null
 *   }
 * }
 */