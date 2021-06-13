//To fetch pomasters with pagination

/**
 * @api {get} /pomaster To fetch all pomasters data
 * @apiName POMasterList
 * @apiGroup POMaster
 *
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit No of data to be returned
 * @apiParam (Query Params) {String} sort_by Sort data according to the field provided
 * @apiParam (Query Params) {String="ASCE","DESC"} sort_order Sort data according to ASCENDING or DESCENDING
 *
 * @apiSuccess (200) {Object[]} data List of all the POMaster data
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *"data": [{
 *      "id": 1,
 *       "area": "Ranip",
 *       "state": "Gujarat",
 *       "city": "Ahemdabad",
 *       "country": "India",
 *       "postalCode": "382487",
 *       "isActive": true,
 *       "deletedDate": null,
 *       "createdDate": "2021-04-28T13:21:54.000Z",
 *       "updatedDate": "2021-04-28T13:21:54.000Z" *
 *       },
 *       {
 *       "id": 2,
 *       "area": "Ranip",
 *       "state": "Gujarat",
 *       "city": "Ahemdabad",
 *       "country": "India",
 *       "postalCode": "382487",
 *       "isActive": true,
 *       "deletedDate": null,
 *       "createdDate": "2021-04-28T13:22:05.000Z",
 *       "updatedDate": "2021-04-28T13:22:05.000Z" *
 *       }
 *   ]
 *}
 *
 *@apiError (POMasterNotFound) {String} message No records were found
 *@apiError (POMasterNotFound) {Object[]} data Empty Array
 *@apiErrorExample {json} Error-Response:
 *     HTTP/1.1 200 No records found
 *     {
 *       "message": "No records found"
 *        "data":[]
 *     }
 *
 */

//To fetch a specific POMaster with unique id
/**
 *
 * @api {get} /pomaster/:id To fetch pomaster with unique id
 * @apiName fetchPoMaster
 * @apiGroup POMaster
 *
 *
 * @apiParam  {Number} id Unique POMaster id
 *
 * @apiSuccess (POMasterDetail) {Number} id  unique id of PoMaster
 * @apiSuccess (POMasterDetail) {String} area  Name of the area
 * @apiSuccess (POMasterDetail) {String} state  Name of the state
 * @apiSuccess (POMasterDetail) {String} city  Name of the city
 * @apiSuccess (POMasterDetail) {String} country  Name of the country
 * @apiSuccess (POMasterDetail) {String} postalCode  Zip/Postal Code of that specific area
 * @apiSuccess (POMasterDetail) {Boolean} isActive  Boolean value if that data is active/inactive
 * @apiSuccess (POMasterDetail) {Date} deletedDate  Date when the entry was deleted
 * @apiSuccess (POMasterDetail) {Date} updatedDate  Date when the entry was updated
 * @apiSuccess (POMasterDetail) {Date} CreatedDate  Date when the entry was created
 * @apiSuccessExample {json} Success-Response:
 * {
 *       "id": 1,
 *       "area": "Ranip",
 *       "state": "Gujarat",
 *       "city": "Ahemdabad",
 *       "country": "India",
 *       "postalCode": "382487",
 *       "isActive": true,
 *       "deletedDate": null,
 *       "createdDate": "2021-04-28T13:21:54.000Z",
 *       "updatedDate": "2021-04-28T13:21:54.000Z"
 * }
 *
 * @apiError (Invalid Id Type) {String} error Id must be a number
 * @apiError (POMasterNotFound) {String} message PoMaster with unique id not found
 * @apiError (POMasterNotFound) {Object[]} data EmptyArray
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 200 No records found
 *     {
 *       "message": "No records found"
 *        "data":[]
 *     }
 *      ///////OR///////////
 *      HTTP/1.1 500 No records found
 *     {
 *       "error": "Id must be a number"
 *     }
 *
 */

//To add POMaster
/**
 *
 * @api {post} /pomaster To add new POMaster
 * @apiName addPOMaster
 * @apiGroup POMaster
 *
 *
 * @apiParam (Body) {String} area  Name of the area
 * @apiParam (Body) {String} state  Name of the state
 * @apiParam (Body) {String} city  Name of the city
 * @apiParam (Body) {String} country  Name of the country
 * @apiParam (Body) {String} postalCode  Zip/Postal Code of that specific area
 * @apiParam (Body) {Boolean="true","false"} isActive  Boolean value if that data is active/inactive
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *      po:{
 *              "area": "Ranip",
 *              "state": "Gujarat",
 *              "city": "Ahemdabad",
 *              "country": "India",
 *              "postalCode": "382487",
 *              "isActive": true,
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
 *          "area": "maninagar",
 *          "state": "Gujarat",
 *          "city": "Ahemdabad",
 *          "country": "India",
 *          "postalCode": "382487",
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

//to update POMaster
/**
 * 
 * @api {put} /pomaster/:id To update the Pomaster with unique id
 * @apiName UpdatePOMaster
 * @apiGroup POMaster
 * 
 * 
 * @apiParam  (Parameter) {Number} id Unique Id of PoMaster
 * @apiParam (Body) {String} [area]  Name of the area
 * @apiParam (Body) {String} [state]  Name of the state
 * @apiParam (Body) {String} [city]  Name of the city
 * @apiParam (Body) {String} [country]  Name of the country
 * @apiParam (Body) {String} [postalCode]  Zip/Postal Code of that specific area
 * @apiParam (Body) {Boolean="true","false"} [isActive]  Boolean value if that data is active/inactive
 *
 * @apiParamExample  {json} Request-Example:
 * {
 *  po:{
 *          "area": "Ranip",
 *          "state": "Gujarat",
 *          "city": "Ahemdabad",
 *          "country": "India",
 *          "postalCode": "382487",
 *          "isActive": true,
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
 * @apiError (Invalid Id Type) {String} error  Id must be an integer

 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 200 Record not updated successfully
 *     {
 *       "message": "Record not updated successfully"
 *     }
 *      ///////OR///////////
 *      HTTP/1.1 500 No records found
 *     {
 *       "error": "Id must be a number"
 *     }
 */

//To delete a POmaster
/**
 *
 * @api {delete} /pomaster/:id To delete the Pomaster with unique id
 * @apiName DeletePOMaster
 * @apiGroup POMaster
 *
 * @apiParam  (Parameter) {Number} id Unique Id of PoMaster
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
 *      HTTP/1.1 500 No records found
 *     {
 *       "error": "Id must be a number"
 *     }
 */
