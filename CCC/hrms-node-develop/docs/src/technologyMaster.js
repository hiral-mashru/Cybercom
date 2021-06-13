//To fetch TechnologyMaster with pagination
/**
 * @api {get} /technologymaster To fetch all TechnologyMaster data
 * @apiName TechnologyMasterList
 * @apiGroup TechnologyMaster
 *
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit No of data to be returned
 * @apiParam (Query Params) {String} sort_by Sort data according to the field provided
 * @apiParam (Query Params) {String="ASCE","DESC"} sort_order Sort data according to ASCENDING or DESCENDING
 *
 * @apiSuccess (200) {Object[]} data List of all the TechnologyMaster data
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *"data": [{
 *      "id": 1,
 *      "title":"JS"
 *      "parentId":null
 *       "isActive": true,
 *       "deletedDate": null,
 *       "createdDate": "2021-04-28T13:21:54.000Z",
 *       "updatedDate": "2021-04-28T13:21:54.000Z" *
 *       },
 *       {
 *       "id": 2,
 *      "title":"Node"
 *      "parentId":1
 *       "isActive": true,
 *       "deletedDate": null,
 *       "createdDate": "2021-04-28T13:21:54.000Z",
 *       "updatedDate": "2021-04-28T13:21:54.000Z" *
 *       }
 *   ]
 *}
 *
 *@apiError (TechnologyMasterNotFound) {String} message No records were found
 *@apiError (TechnologyMasterNotFound) {Object[]} data Empty Array
 *@apiErrorExample {json} Error-Response:
 *     HTTP/1.1 200 No records found
 *     {
 *       "message": "No records found"
 *        "data":[]
 *     }
 *
 */

//To fetch a specific TechnologyMaster with unique id
/**
 *
 * @api {get} /technologymaster/:id To fetch TechnologyMaster with unique id
 * @apiName fetchTechnologyMaster
 * @apiGroup TechnologyMaster
 *
 * @apiParam  {Number} id Unique TechnologyMaster id
 *
 * @apiSuccess (TechnologyMasterDetail) {Number} id  unique id of TechnologyMaster
 * @apiSuccess (TechnologyMasterDetail) {String} title Title of TechnologyMaster
 * @apiSuccess (TechnologyMasterDetail) {Number} parentId Parent Technology of that TechnologyMaster
 * @apiSuccess (TechnologyMasterDetail) {Boolean} isActive  Boolean value if that data is active/inactive
 * @apiSuccess (TechnologyMasterDetail) {Date} deletedDate  Date when the entry was deleted
 * @apiSuccess (TechnologyMasterDetail) {Date} updatedDate  Date when the entry was updated
 * @apiSuccess (TechnologyMasterDetail) {Date} CreatedDate  Date when the entry was created
 * @apiSuccessExample {json} Success-Response:
 * {
 *       "id": 2,
 *      "title":"PHP"
 *      "parentId":1
 *       "isActive": true,
 *       "deletedDate": null,
 *       "createdDate": "2021-04-28T13:21:54.000Z",
 *       "updatedDate": "2021-04-28T13:21:54.000Z"
 * }
 *
 * @apiError (Invalid Id Type) {String} error Id must be a number
 * @apiError (TechnologyMasterNotFound) {String} message TechnologyMaster with unique id not found
 * @apiError (TechnologyMasterNotFound) {Object[]} data EmptyArray
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 200 No records found
 *     {
 *       "message": "No records found"
 *        "data":[]
 *     }
 *      ///////OR///////////
 *      HTTP/1.1 500 Invalid Id Type
 *     {
 *       "error": "Id must be a number"
 *     }
 *
 */

//To add TechnologyMaster
/**
 *
 * @api {post} /technologymaster To add new TechnologyMaster
 * @apiName addTechnologyMaster
 * @apiGroup TechnologyMaster
 *
 * @apiParam (Body) {String} title  Title of TechnologyMaster
 * @apiParam (Body) {Number} parentId  Parent Technology of that TechnologyMaster
 * @apiParam (Body) {Boolean="true","false"} isActive  Boolean value if that data is active/inactive
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *  technology:{
 *          "title": "Node",
 *          "parentId": 1,
 *          "isActive": true,
 *      }
 * }
 *
 *
 * @apiSuccess (200) {String} message Record added successfully
 * @apiSuccess (200) {Object} data Newly added record
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "message": "Record added sucessfully",
 *      "data": {
 *          "id": 2,
 *          "title": "Node",
 *          "parentId":1
 *          "isActive": true,
 *          "updatedDate": "2021-04-29T05:25:26.660Z",
 *          "createdDate": "2021-04-29T05:25:26.660Z"
 * }
 *
 * @apiError (200) {String} message  Record not added successfully
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 200 No records found
 *     {
 *       "message": "Record not added successfully"
 *     }
 */

//to update TechnologyMaster
/**
 * 
 * @api {put} /technologymaster/:id To update the TechnologyMaster with unique id
 * @apiName UpdateTechnologyMaster
 * @apiGroup TechnologyMaster
 * 
 * 
 * @apiParam  (Parameter) {Number} id Unique Id of TechnologyMaster
 * @apiParam (Body) {String} [title]  Title of the TechnologyMaster
 * @apiParam (Body) {String} [parentId]  ParentId of that TechnologyMaster
 * @apiParam (Body) {Boolean="true","false"} [isActive]  Boolean value if that data is active/inactive
 *
 * @apiParamExample  {json} Request-Example:
 * 
 * {
 * technology:{
 *          "title": "React",
 *          "parentId": 1,
 *          "isActive": true,
 *      }
 * }
 * 
 * @apiSuccess (200) {String} message Record updated successfully
 * @apiSuccessExample {json} Success-Response:
 * {
 *     message: Record updated successfully
 * }
 *
 * @apiError (200) {String} message  Record not updated successfully
 * @apiError (Invalid Id Type) {String} error Id must be an integer

 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 200 Record not updated successfully
 *     {
 *       "message": "Record not updated successfully"
 *     }
 *      ///////OR///////////
 *      HTTP/1.1 500 Invalid Id Type
 *     {
 *       "error": "Id must be a number"
 *     }
 */

//To delete a TechnologyMaster
/**
 *
 * @api {delete} /technologymaster/:id To delete the TechnologyMaster with unique id
 * @apiName DeleteTechnologyMaster
 * @apiGroup TechnologyMaster
 *
 * @apiParam {Number} id Unique Id of TechnologyMaster
 *
 * @apiSuccess (200) {String} message Record deleted successfully
 * @apiSuccessExample {json} Success-Response:
 * {
 *     message: Record deleted successfully
 * }
 *
 * @apiError (200) {String} message  Record not deleted successfully
 * @apiError (Invalid Id Type) {String} error  Id must be an integer
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 200 Record not deleted successfully
 *     {
 *       "message": "Record not deleted successfully"
 *     }
 *      ///////OR///////////
 *      HTTP/1.1 500 Invalid Id Type
 *     {
 *       "error": "Id must be a number"
 *     }
 */
