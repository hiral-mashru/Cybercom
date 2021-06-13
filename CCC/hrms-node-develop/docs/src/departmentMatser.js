//list of all departments

/**
 * @api {get} /department List of all the department
 * @apiName DepartmentList
 * @apiGroup Department
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of department to be returned
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * 
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 OK
 * {
 *   "message":"List of departments",
 *   "length":20,
 *   "data":{
 *      "next":{
 *          "page":3,
 *          "limit":3
 *       },
 *      "previous":{
 *          "page":1,
 *          "limit":3
 *       },
 *      "result":[
 *       {
 *          "id":4,
 *          "title":"PHP",
 *          "isActive":true,
 *          "createdDate":"2021-04-27T12:37:14.000Z",
 *          "updatedDate":"2021-04-27T12:37:14.000Z",
 *          "deletedDate":null
 *      },
 *       {
 *          "id":5,
 *          "title":"JS",
 *          "isActive":true,
 *          "createdDate":"2021-04-27T12:37:14.000Z",
 *          "updatedDate":"2021-04-27T12:37:14.000Z",
 *          "deletedDate":null
 *      },
 *       {
 *          "id":6,
 *          "title":"MERN",
 *          "isActive":true,
 *          "createdDate":"2021-04-27T12:37:14.000Z",
 *          "updatedDate":"2021-04-27T12:37:14.000Z",
 *          "deletedDate":null
 *      }
 *      ]
 *    }
 * }
 */

/**
 * @api {post} /department Create a new Department
 * @apiName CreateDepartment
 * @apiGroup Department
 * 
 * @apiParam {String} title Department title
 * @apiParam {Boolean} isActive Boolean to check whether the department is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Department saved successfully"
 * }
 */

/**
 * @api {put} /department/:id Update Department by department Id
 * @apiName UpdateDepartment
 * @apiGroup Department
 * 
 * 
 * @apiParam {Number} id Department Unique Id
 * @apiParam {String} title Department title
 * @apiParam {Boolean} isActive Boolean to check whether the department is active or not
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Department updated successfully"
 * }
 */

/**
 * @api {delete} /department/:id Delete Department by department Id
 * @apiName DeleteDepartment
 * @apiGroup Department
 * 
 * 
 * @apiParam {Number} id Department Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Department deleted successfully"
 * }
 */

/**
 * @api {get} /department/:id Get particular Department by department Id
 * @apiName GetDepartmentById
 * @apiGroup Department
 * 
 * 
 * @apiParam {Number} id Department Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Department Exist",
 *   "data":{
 *      "id": 1,
 *      "title": "PHP",
 *      "isActive": true,
 *      "createdDate": "2021-04-27T12:37:14.000Z",
 *      "updatedDate": "2021-04-27T13:29:56.000Z",
 *      "deletedDate": null
 *   }
 * }
 */
