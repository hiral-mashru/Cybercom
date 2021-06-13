//To create  a new company

/**
 * @api {post} /company Create a new Company
 * @apiName createCompany
 * @apiGroup Company
 * 
 * @apiparam {String} name  Name of the Company
 * @apiparam {String} website  Company website URL
 * @apiparam {Number} noOfEmployees Total number of employees working in a company
 * @apiparam {String} contactNumber Contact number of a company
 * @apiparam {String} contactEmail Email of a company
 * @apiparam {String} streetLine1 Address of a company
 * @apiparam {String} [streetLine2] Address of a company
 * @apiparam {String} area Area of a company
 * @apiparam {String} city City where company is located
 * @apiparam {String} postalCode postalCode where company is located
 * @apiparam {String} state State where company is located
 * @apiparam {String} country Country where company is located
 * @apiparam {String} [appraisalCycle] Company Appraisal Cycle
 * @apiparam {Number} [noticePeriod] Company Notice Period
 * @apiparam {Number} [bondDurationForExperienced] Company Bond Duration for Experienced
 * @apiparam {Number} [bondDurationForFresher] Company Bond Duration for Fresher
 * @apiparam {String} [weekends] Company weekends
 * @apiparam {String} [notes]  Notes
 * @apiparam {Boolean} [isActive]  Company is active or not
 * 
 * 
 * @apiSuccessExample {json} Success-Response
 * HTTP:1.1 201 OK
 * {
 *      "message":"Company created Successfully"
 * }
 * 
 */

//To update a comp-any by id

/**
 * @api {put} /company/:id Update a Company by companyId
 * @apiName UpdateCompany
 * @apiGroup Company
 * 
 * @apiparam {Number} id Company Unique Id
 * 
 * @apiparam {String} name  Name of the Company
 * @apiparam {String} website  Company website URL
 * @apiparam {Number} noOfEmployees Total number of employees working in a company
 * @apiparam {String} contactNumber Contact number of a company
 * @apiparam {String} contactEmail Email of a company
 * @apiparam {String} streetLine1 Address of a company
 * @apiparam {String} [streetLine2] Address of a company
 * @apiparam {String} area Area of a company
 * @apiparam {String} city City where company is located
 * @apiparam {String} postalCode postalCode where company is located
 * @apiparam {String} state State where company is located
 * @apiparam {String} country Country where company is located
 * @apiparam {String} [appraisalCycle] Company Appraisal Cycle
 * @apiparam {Number} [noticePeriod] Company Notice Period
 * @apiparam {Number} [bondDurationForExperienced] Company Bond Duration for Experienced
 * @apiparam {Number} [bondDurationForFresher] Company Bond Duration for Fresher
 * @apiparam {String} [weekends] Company weekends
 * @apiparam {String} [notes]  Notes
 * @apiparam {Boolean} [isActive]  Company is active or not
 * 
 * 
 * @apiSuccessExample {json} Success-Response
 * HTTP:1.1 201 OK
 * {
 *      "message":"Company updated Successfully"
 * }
 * 
 */

//To delete a company by id

/**
 * @api {delete} /company/:id Delete Company by Company Id
 * @apiName DeleteCompany
 * @apiGroup Company
 * 
 * 
 * @apiParam {Number} id Company Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Company deleted successfully"
 * }
 */

//To get a particular company by id

/** 
 * @api {get} /company/:id Get particular Company by Company Id
 * @apiName GetCompanyById
 * @apiGroup Company
 * 
 * 
 * @apiParam {Number} id Company Unique Id
 * 
 * @apiSuccessExample {json} Success-Response 
 * HTTP:1.1 201 OK
 * {
 *   "message":"Company Profile",
 *   "data":{
 *      "id": 1,
 *      "title": "cybercom",
 *      "website": "cybercom",
 *      "noOfEmployees": 150,
 *      "contactNumber": "7418529631",
 *      "contactEmail": "cybercom@gmail.com",
 *      "streetLine1": "vastrapur road",
 *      "streetLine2": null,
 *      "area": "vastrapur",
 *      "city": "ahmedabad",
 *      "postalCode": "111111",
 *      "state": "gujrat",
 *      "country": "india",
 *      "appraisalCycle": null,
 *      "noticePeriod": null,
 *      "bondDurationForExperienced": null,
 *      "bondDurationForFreshers": null,
 *      "weekends": null,
 *      "notes": null,
 *      "isActive": true,
 *      "createdDate": "2021-04-27T12:37:14.000Z",
 *      "updatedDate": "2021-04-27T13:29:56.000Z",
 *      "deletedDate": null
 *   }
 * }
 */

//To get a list of companies
/** 
 * @api {get} /company Get list of comapnies
 * @apiName getCompanies
 * @apiGroup Company
 * 
 * @apiParam (Query Params) {Number} page Page Number
 * @apiParam (Query Params) {Number} limit Number of companies you want to retrieved
 * @apiParam (Query Params) {String} sortBy The field name for sorting
 * @apiParam (Query Params) {String="asc","desc"} orderBy To sort in ascending or descending order
 * 
 * @apiSuccess {String} message List of all companies
 * @apiSuccess {Object} data Conatins the information of next and previous page and actual result
 * @apiSuccess {Object[]} data.result Contains list of companies
 * @apiSuccess {Object} data.next Conatins the next page number and limit if next page exist
 * @apiSuccess {page} data.next.page The page number of next page
 * @apiSuccess {limit} data.next.limit Limit of information to retrieved
 * @apiSuccess {Object} data.previous Conatins the previous page number and limit if previous page exist
 * @apiSuccess {page} data.previous.page The page number of previous page
 * @apiSuccess {limit} data.previous.limit Limit of information to retrieved
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 201 OK
 * {
 *      "message":"List of all Companies",
 *      "data":{
 *          "next":{
 *              "page":2
 *              "limit":3
 *          },
 *          "result":[
 *          {    
 *              "id": 1,
 *               "name": "cybercon",
 *               "website": "cybercom",
 *               "noOfEmployees": 150,
 *               "contactNumber": "9874561231",
 *               "contactEmail": "cybercon@gmail.com",
 *               "streetLine1": "vastrapur road",
 *               "streetLine2": null,
 *               "area": "vastrapur",
 *               "city": "ahmedabad",
 *               "postalCode": "396230",
 *               "state": "gujrat",
 *               "country": "india",
 *               "appraisalCycle": null,
 *               "noticePeriod": null,
 *               "bondDurationForExperienced": null,
 *               "bondDurationForFreshers": null,
 *               "weekends": null,
 *               "notes": null,
 *               "isActive": null,
 *               "createdDate": "2021-04-28T12:07:57.000Z",
 *               "updatedDate": "2021-04-28T12:07:57.000Z",
 *               "deletedDate": null
 *           },
 *          {    
 *              "id": 2,
 *               "name": "tcs",
 *               "website": "tcs",
 *               "noOfEmployees": 150,
 *               "contactNumber": "9874561231",
 *               "contactEmail": "tcs@gmail.com",
 *               "streetLine1": "vastrapur road",
 *               "streetLine2": null,
 *               "area": "vastrapur",
 *               "city": "ahmedabad",
 *               "postalCode": "396230",
 *               "state": "gujrat",
 *               "country": "india",
 *               "appraisalCycle": null,
 *               "noticePeriod": null,
 *               "bondDurationForExperienced": null,
 *               "bondDurationForFreshers": null,
 *               "weekends": null,
 *               "notes": null,
 *               "isActive": null,
 *               "createdDate": "2021-04-28T12:07:57.000Z",
 *               "updatedDate": "2021-04-28T12:07:57.000Z",
 *               "deletedDate": null
 *           },
 *          {    
 *              "id": 3,
 *               "name": "visa",
 *               "website": "visa",
 *               "noOfEmployees": 8000,
 *               "contactNumber": "9874561231",
 *               "contactEmail": "visa@gmail.com",
 *               "streetLine1": "vastrapur road",
 *               "streetLine2": null,
 *               "area": "vastrapur",
 *               "city": "ahmedabad",
 *               "postalCode": "396230",
 *               "state": "gujrat",
 *               "country": "india",
 *               "appraisalCycle": null,
 *               "noticePeriod": null,
 *               "bondDurationForExperienced": null,
 *               "bondDurationForFreshers": null,
 *               "weekends": null,
 *               "notes": null,
 *               "isActive": null,
 *               "createdDate": "2021-04-28T12:07:57.000Z",
 *               "updatedDate": "2021-04-28T12:07:57.000Z",
 *               "deletedDate": null
 *           }
 *          ]
 *      }
 * }
 * 
 */



