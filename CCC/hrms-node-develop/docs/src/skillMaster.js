//To fetch skillMaster with pagination
/**
 * @api {get} /skillmaster To fetch all skillmaster data
 * @apiName SkillMasterList
 * @apiGroup SkillMaster
 *
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit No of data to be returned
 * @apiParam (Query Params) {String} sort_by Sort data according to the field provided
 * @apiParam (Query Params) {String="ASCE","DESC"} sort_order Sort data according to ASCENDING or DESCENDING
 *
 * @apiSuccess (200) {Object[]} data List of all the SkillMaster data
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *"data": [{
 *      "id": 1,
 *      "title":"Node"
 *       "isActive": true,
 *       "deletedDate": null,
 *       "createdDate": "2021-04-28T13:21:54.000Z",
 *       "updatedDate": "2021-04-28T13:21:54.000Z" *
 *       },
 *       {
 *       "id": 2,
 *      "title":"PHP"
 *       "isActive": true,
 *       "deletedDate": null,
 *       "createdDate": "2021-04-28T13:21:54.000Z",
 *       "updatedDate": "2021-04-28T13:21:54.000Z" *
 *       }
 *   ]
 *}
 *
 *@apiError (SkillMasterNotFound) {String} message No records were found
 *@apiError (SkillMasterNotFound) {Object[]} data Empty Array
 *@apiErrorExample {json} Error-Response:
 *     HTTP/1.1 200 No records found
 *     {
 *       "message": "No records found"
 *        "data":[]
 *     }
 *
 */

//To fetch a specific SkillMaster with unique id
/**
 *
 * @api {get} /skillmaster/:id To fetch skillmaster with unique id
 * @apiName fetchSkillMaster
 * @apiGroup SkillMaster
 *
 * @apiParam  {Number} id Unique SkillMaster id
 *
 * @apiSuccess (SkillMasterDetail) {Number} id  unique id of SkillMaster
 * @apiSuccess (SkillMasterDetail) {String} title Title of SkillMaster
 * @apiSuccess (SkillMasterDetail) {Boolean} isActive  Boolean value if that data is active/inactive
 * @apiSuccess (SkillMasterDetail) {Date} deletedDate  Date when the entry was deleted
 * @apiSuccess (SkillMasterDetail) {Date} updatedDate  Date when the entry was updated
 * @apiSuccess (SkillMasterDetail) {Date} CreatedDate  Date when the entry was created
 * @apiSuccessExample {json} Success-Response:
 * {
 *       "id": 2,
 *      "title":"PHP"
 *       "isActive": true,
 *       "deletedDate": null,
 *       "createdDate": "2021-04-28T13:21:54.000Z",
 *       "updatedDate": "2021-04-28T13:21:54.000Z"
 * }
 *
 * @apiError (Invalid Id Type) {String} error Id must be a number
 * @apiError (SkillMasterNotFound) {String} message SkillMaster with unique id not found
 * @apiError (SkillMasterNotFound) {Object[]} data EmptyArray
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

//To add SkillMaster
/**
 *
 * @api {post} /skillmaster To add new SkillMaster
 * @apiName addSkillMaster
 * @apiGroup SkillMaster
 *
 * @apiParam (Body) {String} title  Title of SkillMaster
 * @apiParam (Body) {Boolean="true","false"} isActive  Boolean value if that data is active/inactive
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *     skill:{
 *          "title": "Node",
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
 *          "id": 21,
 *          "title": "PHP",
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

//to update SkillMaster
/**
 * 
 * @api {put} /skillmaster/:id To update the SkillMaster with unique id
 * @apiName UpdateSkillMaster
 * @apiGroup SkillMaster
 * 
 * 
 * @apiParam  (Parameter) {Number} id Unique Id of SkillMaster
 * @apiParam (Body) {String} [title]  Title of the SkillMaster
 * @apiParam (Body) {Boolean="true","false"} [isActive]  Boolean value if that data is active/inactive
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *  skill:{
 *           "title": "React",
 *           "isActive": true,
 *  }
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

//To delete a POmaster
/**
 *
 * @api {delete} /skillmaster/:id To delete the SkillMaster with unique id
 * @apiName DeleteSkillMaster
 * @apiGroup SkillMaster
 *
 * @apiParam {Number} id Unique Id of SkillMaster
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
