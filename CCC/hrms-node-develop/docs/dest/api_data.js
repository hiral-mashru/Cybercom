define({ "api": [
  {
    "type": "get",
    "url": "/listBloodGroups",
    "title": "List of Blood Groups",
    "name": "BloodGroupList",
    "group": "BloodGroupMaster",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>number of information</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>Inputs the field name on which the sorting needs to be done</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "orderBy",
            "description": "<p>Inputs to sort in ascending or descending order. ('asc' for ascending and 'desc' for descending)</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Get data related to given title</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Get data of given ids (IDs can be seperated by ',')</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 1,\n  \"message\": {\n      \"previous\": {\n          \"page\": 1,\n          \"limit\": 3\n      },\n      \"next\": {\n          \"page\": 3,\n          \"limit\": 3\n      },\n      \"totalPages\": 4,\n      \"totalItems\": 10,\n      \"limit\": 3,\n      \"currentPage\": 2,\n      \"orderBy\" : \"asc\",\n      \"sortBy\" : \"id\",\n      \"data\": [\n          {\n              \"id\": 1,\n              \"title\": \"O+\",\n              \"isActive\": true,\n              \"createdDate\": \"2021-04-30T13:28:23.000Z\",\n              \"updatedDate\": \"2021-04-30T13:28:23.000Z\",\n              \"deletedDate\": null\n          }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/bloodGroupMaster.js",
    "groupTitle": "BloodGroupMaster"
  },
  {
    "type": "post",
    "url": "/bloodGroup",
    "title": "Create new blood group",
    "name": "CreateNewBloodGroup",
    "group": "BloodGroupMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Blood Group</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Check if Blood group is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"status\": 1,\n  \"message\": \"Blood Group saved successfully...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/bloodGroupMaster.js",
    "groupTitle": "BloodGroupMaster"
  },
  {
    "type": "delete",
    "url": "/deleteBloodGroup/:id",
    "title": "Delete Blood group by given Id",
    "name": "DeleteBloodGroup",
    "group": "BloodGroupMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Blood group Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"status\": 1,\n  \"message\": \"Blood Group deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/bloodGroupMaster.js",
    "groupTitle": "BloodGroupMaster"
  },
  {
    "type": "get",
    "url": "/getBloodGroup/:id",
    "title": "Get particular blood group by given Id",
    "name": "GetBloodGroupById",
    "group": "BloodGroupMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Blood Group Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"status\": 1,\n  \"data\": {\n      \"id\": 1,\n      \"title\": \"B positive\",\n      \"isActive\": true,\n      \"createdDate\": \"2021-04-28T07:29:44.000Z\",\n      \"updatedDate\": \"2021-04-28T07:29:44.000Z\",\n      \"deletedDate\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/bloodGroupMaster.js",
    "groupTitle": "BloodGroupMaster"
  },
  {
    "type": "put",
    "url": "/updateBloodGroup/:id",
    "title": "Update Blood Group by given ID",
    "name": "UpdateBloodGroup",
    "group": "BloodGroupMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Blood Group Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Blood group</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Check if Blood group is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"status\": 1,\n  \"message\": \"Blood Group updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/bloodGroupMaster.js",
    "groupTitle": "BloodGroupMaster"
  },
  {
    "type": "delete",
    "url": "/company/:id",
    "title": "Delete Company by Company Id",
    "name": "DeleteCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Company Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Company deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/companyMaster.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/company/:id",
    "title": "Get particular Company by Company Id",
    "name": "GetCompanyById",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Company Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Company Profile\",\n  \"data\":{\n     \"id\": 1,\n     \"title\": \"cybercom\",\n     \"website\": \"cybercom\",\n     \"noOfEmployees\": 150,\n     \"contactNumber\": \"7418529631\",\n     \"contactEmail\": \"cybercom@gmail.com\",\n     \"streetLine1\": \"vastrapur road\",\n     \"streetLine2\": null,\n     \"area\": \"vastrapur\",\n     \"city\": \"ahmedabad\",\n     \"postalCode\": \"111111\",\n     \"state\": \"gujrat\",\n     \"country\": \"india\",\n     \"appraisalCycle\": null,\n     \"noticePeriod\": null,\n     \"bondDurationForExperienced\": null,\n     \"bondDurationForFreshers\": null,\n     \"weekends\": null,\n     \"notes\": null,\n     \"isActive\": true,\n     \"createdDate\": \"2021-04-27T12:37:14.000Z\",\n     \"updatedDate\": \"2021-04-27T13:29:56.000Z\",\n     \"deletedDate\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/companyMaster.js",
    "groupTitle": "Company"
  },
  {
    "type": "put",
    "url": "/company/:id",
    "title": "Update a Company by companyId",
    "name": "UpdateCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Company Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>Company website URL</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "noOfEmployees",
            "description": "<p>Total number of employees working in a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactNumber",
            "description": "<p>Contact number of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactEmail",
            "description": "<p>Email of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "streetLine1",
            "description": "<p>Address of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "streetLine2",
            "description": "<p>Address of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>Area of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postalCode",
            "description": "<p>postalCode where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "appraisalCycle",
            "description": "<p>Company Appraisal Cycle</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "noticePeriod",
            "description": "<p>Company Notice Period</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bondDurationForExperienced",
            "description": "<p>Company Bond Duration for Experienced</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bondDurationForFresher",
            "description": "<p>Company Bond Duration for Fresher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "weekends",
            "description": "<p>Company weekends</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Notes</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isActive",
            "description": "<p>Company is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP:1.1 201 OK\n{\n     \"message\":\"Company updated Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/companyMaster.js",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/company",
    "title": "Create a new Company",
    "name": "createCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>Company website URL</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "noOfEmployees",
            "description": "<p>Total number of employees working in a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactNumber",
            "description": "<p>Contact number of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactEmail",
            "description": "<p>Email of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "streetLine1",
            "description": "<p>Address of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "streetLine2",
            "description": "<p>Address of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>Area of a company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postalCode",
            "description": "<p>postalCode where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country where company is located</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "appraisalCycle",
            "description": "<p>Company Appraisal Cycle</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "noticePeriod",
            "description": "<p>Company Notice Period</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bondDurationForExperienced",
            "description": "<p>Company Bond Duration for Experienced</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bondDurationForFresher",
            "description": "<p>Company Bond Duration for Fresher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "weekends",
            "description": "<p>Company weekends</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Notes</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isActive",
            "description": "<p>Company is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP:1.1 201 OK\n{\n     \"message\":\"Company created Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/companyMaster.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/company",
    "title": "Get list of comapnies",
    "name": "getCompanies",
    "group": "Company",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of companies you want to retrieved</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>List of all companies</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Conatins the information of next and previous page and actual result</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.result",
            "description": "<p>Contains list of companies</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.next",
            "description": "<p>Conatins the next page number and limit if next page exist</p>"
          },
          {
            "group": "Success 200",
            "type": "page",
            "optional": false,
            "field": "data.next.page",
            "description": "<p>The page number of next page</p>"
          },
          {
            "group": "Success 200",
            "type": "limit",
            "optional": false,
            "field": "data.next.limit",
            "description": "<p>Limit of information to retrieved</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.previous",
            "description": "<p>Conatins the previous page number and limit if previous page exist</p>"
          },
          {
            "group": "Success 200",
            "type": "page",
            "optional": false,
            "field": "data.previous.page",
            "description": "<p>The page number of previous page</p>"
          },
          {
            "group": "Success 200",
            "type": "limit",
            "optional": false,
            "field": "data.previous.limit",
            "description": "<p>Limit of information to retrieved</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 201 OK\n{\n     \"message\":\"List of all Companies\",\n     \"data\":{\n         \"next\":{\n             \"page\":2\n             \"limit\":3\n         },\n         \"result\":[\n         {    \n             \"id\": 1,\n              \"name\": \"cybercon\",\n              \"website\": \"cybercom\",\n              \"noOfEmployees\": 150,\n              \"contactNumber\": \"9874561231\",\n              \"contactEmail\": \"cybercon@gmail.com\",\n              \"streetLine1\": \"vastrapur road\",\n              \"streetLine2\": null,\n              \"area\": \"vastrapur\",\n              \"city\": \"ahmedabad\",\n              \"postalCode\": \"396230\",\n              \"state\": \"gujrat\",\n              \"country\": \"india\",\n              \"appraisalCycle\": null,\n              \"noticePeriod\": null,\n              \"bondDurationForExperienced\": null,\n              \"bondDurationForFreshers\": null,\n              \"weekends\": null,\n              \"notes\": null,\n              \"isActive\": null,\n              \"createdDate\": \"2021-04-28T12:07:57.000Z\",\n              \"updatedDate\": \"2021-04-28T12:07:57.000Z\",\n              \"deletedDate\": null\n          },\n         {    \n             \"id\": 2,\n              \"name\": \"tcs\",\n              \"website\": \"tcs\",\n              \"noOfEmployees\": 150,\n              \"contactNumber\": \"9874561231\",\n              \"contactEmail\": \"tcs@gmail.com\",\n              \"streetLine1\": \"vastrapur road\",\n              \"streetLine2\": null,\n              \"area\": \"vastrapur\",\n              \"city\": \"ahmedabad\",\n              \"postalCode\": \"396230\",\n              \"state\": \"gujrat\",\n              \"country\": \"india\",\n              \"appraisalCycle\": null,\n              \"noticePeriod\": null,\n              \"bondDurationForExperienced\": null,\n              \"bondDurationForFreshers\": null,\n              \"weekends\": null,\n              \"notes\": null,\n              \"isActive\": null,\n              \"createdDate\": \"2021-04-28T12:07:57.000Z\",\n              \"updatedDate\": \"2021-04-28T12:07:57.000Z\",\n              \"deletedDate\": null\n          },\n         {    \n             \"id\": 3,\n              \"name\": \"visa\",\n              \"website\": \"visa\",\n              \"noOfEmployees\": 8000,\n              \"contactNumber\": \"9874561231\",\n              \"contactEmail\": \"visa@gmail.com\",\n              \"streetLine1\": \"vastrapur road\",\n              \"streetLine2\": null,\n              \"area\": \"vastrapur\",\n              \"city\": \"ahmedabad\",\n              \"postalCode\": \"396230\",\n              \"state\": \"gujrat\",\n              \"country\": \"india\",\n              \"appraisalCycle\": null,\n              \"noticePeriod\": null,\n              \"bondDurationForExperienced\": null,\n              \"bondDurationForFreshers\": null,\n              \"weekends\": null,\n              \"notes\": null,\n              \"isActive\": null,\n              \"createdDate\": \"2021-04-28T12:07:57.000Z\",\n              \"updatedDate\": \"2021-04-28T12:07:57.000Z\",\n              \"deletedDate\": null\n          }\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/companyMaster.js",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/department",
    "title": "Create a new Department",
    "name": "CreateDepartment",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Department title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether the department is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Department saved successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/departmentMatser.js",
    "groupTitle": "Department"
  },
  {
    "type": "delete",
    "url": "/department/:id",
    "title": "Delete Department by department Id",
    "name": "DeleteDepartment",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Department Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Department deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/departmentMatser.js",
    "groupTitle": "Department"
  },
  {
    "type": "get",
    "url": "/department",
    "title": "List of all the department",
    "name": "DepartmentList",
    "group": "Department",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of department to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\":\"List of departments\",\n  \"length\":20,\n  \"data\":{\n     \"next\":{\n         \"page\":3,\n         \"limit\":3\n      },\n     \"previous\":{\n         \"page\":1,\n         \"limit\":3\n      },\n     \"result\":[\n      {\n         \"id\":4,\n         \"title\":\"PHP\",\n         \"isActive\":true,\n         \"createdDate\":\"2021-04-27T12:37:14.000Z\",\n         \"updatedDate\":\"2021-04-27T12:37:14.000Z\",\n         \"deletedDate\":null\n     },\n      {\n         \"id\":5,\n         \"title\":\"JS\",\n         \"isActive\":true,\n         \"createdDate\":\"2021-04-27T12:37:14.000Z\",\n         \"updatedDate\":\"2021-04-27T12:37:14.000Z\",\n         \"deletedDate\":null\n     },\n      {\n         \"id\":6,\n         \"title\":\"MERN\",\n         \"isActive\":true,\n         \"createdDate\":\"2021-04-27T12:37:14.000Z\",\n         \"updatedDate\":\"2021-04-27T12:37:14.000Z\",\n         \"deletedDate\":null\n     }\n     ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/departmentMatser.js",
    "groupTitle": "Department"
  },
  {
    "type": "get",
    "url": "/department/:id",
    "title": "Get particular Department by department Id",
    "name": "GetDepartmentById",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Department Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Department Exist\",\n  \"data\":{\n     \"id\": 1,\n     \"title\": \"PHP\",\n     \"isActive\": true,\n     \"createdDate\": \"2021-04-27T12:37:14.000Z\",\n     \"updatedDate\": \"2021-04-27T13:29:56.000Z\",\n     \"deletedDate\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/departmentMatser.js",
    "groupTitle": "Department"
  },
  {
    "type": "put",
    "url": "/department/:id",
    "title": "Update Department by department Id",
    "name": "UpdateDepartment",
    "group": "Department",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Department Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Department title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether the department is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Department updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/departmentMatser.js",
    "groupTitle": "Department"
  },
  {
    "type": "post",
    "url": "/designation",
    "title": "Create a new Designation",
    "name": "CreateDesignation",
    "group": "Designation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Designation title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether the designation is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Designation saved successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/designationMaster.js",
    "groupTitle": "Designation"
  },
  {
    "type": "delete",
    "url": "/designation/:id",
    "title": "Delete Designation by designation Id",
    "name": "DeleteDesignation",
    "group": "Designation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Designation Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Designation deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/designationMaster.js",
    "groupTitle": "Designation"
  },
  {
    "type": "get",
    "url": "/designation",
    "title": "List of all the designation",
    "name": "DesignationList",
    "group": "Designation",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of designation to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>The field name for sorting</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"asc\"",
              "\"desc\""
            ],
            "optional": false,
            "field": "orderBy",
            "description": "<p>To sort in ascending or descending order</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\":\"List of designations\",\n  \"length\":15,\n  \"data\":{\n  \"next\":{\n         \"page\":3,\n         \"limit\":3\n      },\n   \"previous\":{\n         \"page\":1,\n         \"limit\":3\n      },\n  \"result\":[\n     {\n         \"id\":4,\n         \"title\":\"SDE\",\n         \"isActive\":true,\n         \"createdDate\":\"2021-04-27T12:37:14.000Z\",\n         \"updatedDate\":\"2021-04-27T12:37:14.000Z\",\n         \"deletedDate\":null\n     },\n     {\n         \"id\":5,\n         \"title\":\"Tech Lead\",\n         \"isActive\":true,\n         \"createdDate\":\"2021-04-27T12:37:14.000Z\",\n         \"updatedDate\":\"2021-04-27T12:37:14.000Z\",\n         \"deletedDate\":null\n     },\n     {\n         \"id\":6,\n         \"title\":\"Devops\",\n         \"isActive\":true,\n         \"createdDate\":\"2021-04-27T12:37:14.000Z\",\n         \"updatedDate\":\"2021-04-27T12:37:14.000Z\",\n         \"deletedDate\":null\n     }\n   ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/designationMaster.js",
    "groupTitle": "Designation"
  },
  {
    "type": "get",
    "url": "/designation/:id",
    "title": "Get particular Designation by designation Id",
    "name": "GetDesignationById",
    "group": "Designation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Designation Unique Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Designation Exist\",\n  \"data\":{\n     \"id\": 1,\n     \"title\": \"SDE\",\n     \"isActive\": true,\n     \"createdDate\": \"2021-04-27T12:37:14.000Z\",\n     \"updatedDate\": \"2021-04-27T13:29:56.000Z\",\n     \"deletedDate\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/designationMaster.js",
    "groupTitle": "Designation"
  },
  {
    "type": "put",
    "url": "/designation/:id",
    "title": "Update Designation by designation Id",
    "name": "UpdateDesignation",
    "group": "Designation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Designation Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Designation title</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean to check whether the designation is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"message\":\"Designation updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/designationMaster.js",
    "groupTitle": "Designation"
  },
  {
    "type": "post",
    "url": "/educationType",
    "title": "Create new education type",
    "name": "CreateNewEducationType",
    "group": "EducationTypeMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Education Type</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Check if Education type is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"status\": 1,\n  \"message\": \"Education Type saved successfully...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/educationTypeMaster.js",
    "groupTitle": "EducationTypeMaster"
  },
  {
    "type": "delete",
    "url": "/deleteEducationType/:id",
    "title": "Delete Education Type by given Id",
    "name": "DeleteEducationType",
    "group": "EducationTypeMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Education Type Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n   \"status\": 1,\n  \"message\": \"Education Type deleted Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/educationTypeMaster.js",
    "groupTitle": "EducationTypeMaster"
  },
  {
    "type": "get",
    "url": "/listEducationTypes",
    "title": "List of Education Types",
    "name": "EducationTypeList",
    "group": "EducationTypeMaster",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>number of information</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>Inputs the field name on which the sorting needs to be done</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "orderBy",
            "description": "<p>Inputs to sort in ascending or descending order. ('asc' for ascending and 'desc' for descending)</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Get data related to given title</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Get data of given ids (IDs can be seperated by ',')</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 1,\n  \"message\": [\n      {\n      \"previous\": {\n          \"page\": 1,\n          \"limit\": 3\n      },\n      \"next\": {\n          \"page\": 3,\n          \"limit\": 3\n      },\n     \"totalPages\": 1,\n     \"totalItems\": 1,\n     \"limit\": 5,\n     \"currentPage\": 1,\n     \"orderBy\" : \"asc\",\n     \"sortBy\" : \"id\",\n     \"data\": [\n         {\n             \"id\": 1,\n             \"title\": \"Work from home\",\n             \"isActive\": false,\n             \"createdDate\": \"2021-04-27T18:39:01.000Z\",\n             \"updatedDate\": \"2021-04-28T07:53:25.000Z\",\n             \"deletedDate\": null\n        }\n     ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/educationTypeMaster.js",
    "groupTitle": "EducationTypeMaster"
  },
  {
    "type": "get",
    "url": "/getEducationType/:id",
    "title": "Get particular education type by given Id",
    "name": "GetEducationTypeById",
    "group": "EducationTypeMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Education Type Id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"status\": 1,\n  \"data\": {\n      \"id\": 1,\n      \"title\": \"Work from home\",\n      \"isActive\": true,\n      \"createdDate\": \"2021-04-28T07:29:44.000Z\",\n      \"updatedDate\": \"2021-04-28T07:29:44.000Z\",\n      \"deletedDate\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/educationTypeMaster.js",
    "groupTitle": "EducationTypeMaster"
  },
  {
    "type": "put",
    "url": "/updateEducationType/:id",
    "title": "Update Education Type by given ID",
    "name": "UpdateEducationType",
    "group": "EducationTypeMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Education Type Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Education Type</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Check if Education Type is active or not</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response ",
          "content": "HTTP:1.1 201 OK\n{\n  \"status\": 1,\n  \"message\": \"Education Type updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/educationTypeMaster.js",
    "groupTitle": "EducationTypeMaster"
  },
  {
    "type": "delete",
    "url": "/pomaster/:id",
    "title": "To delete the Pomaster with unique id",
    "name": "DeletePOMaster",
    "group": "POMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of PoMaster</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record deleted successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message: Record deleted successfully\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not deleted successfully</p>"
          }
        ],
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be an integer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Record not deleted successfully\n{\n  \"message\": \"Record not deleted successfully\"\n}\n ///////OR///////////\n HTTP/1.1 500 No records found\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/poMaster.js",
    "groupTitle": "POMaster"
  },
  {
    "type": "get",
    "url": "/pomaster",
    "title": "To fetch all pomasters data",
    "name": "POMasterList",
    "group": "POMaster",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>No of data to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sort_by",
            "description": "<p>Sort data according to the field provided</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"ASCE\"",
              "\"DESC\""
            ],
            "optional": false,
            "field": "sort_order",
            "description": "<p>Sort data according to ASCENDING or DESCENDING</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of all the POMaster data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": [{\n     \"id\": 1,\n      \"area\": \"Ranip\",\n      \"state\": \"Gujarat\",\n      \"city\": \"Ahemdabad\",\n      \"country\": \"India\",\n      \"postalCode\": \"382487\",\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\" *\n      },\n      {\n      \"id\": 2,\n      \"area\": \"Ranip\",\n      \"state\": \"Gujarat\",\n      \"city\": \"Ahemdabad\",\n      \"country\": \"India\",\n      \"postalCode\": \"382487\",\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:22:05.000Z\",\n      \"updatedDate\": \"2021-04-28T13:22:05.000Z\" *\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "POMasterNotFound": [
          {
            "group": "POMasterNotFound",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>No records were found</p>"
          },
          {
            "group": "POMasterNotFound",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Empty Array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No records found\n{\n  \"message\": \"No records found\"\n   \"data\":[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/poMaster.js",
    "groupTitle": "POMaster"
  },
  {
    "type": "put",
    "url": "/pomaster/:id",
    "title": "To update the Pomaster with unique id",
    "name": "UpdatePOMaster",
    "group": "POMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of PoMaster</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "area",
            "description": "<p>Name of the area</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>Name of the state</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": "<p>Name of the city</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "country",
            "description": "<p>Name of the country</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "postalCode",
            "description": "<p>Zip/Postal Code of that specific area</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": true,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n po:{\n         \"area\": \"Ranip\",\n         \"state\": \"Gujarat\",\n         \"city\": \"Ahemdabad\",\n         \"country\": \"India\",\n         \"postalCode\": \"382487\",\n         \"isActive\": true,\n }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record updated successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message: Record updated successfully\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not updated successfully</p>"
          }
        ],
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be an integer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Record not updated successfully\n{\n  \"message\": \"Record not updated successfully\"\n}\n ///////OR///////////\n HTTP/1.1 500 No records found\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/poMaster.js",
    "groupTitle": "POMaster"
  },
  {
    "type": "post",
    "url": "/pomaster",
    "title": "To add new POMaster",
    "name": "addPOMaster",
    "group": "POMaster",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>Name of the area</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Name of the state</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Name of the city</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Name of the country</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "postalCode",
            "description": "<p>Zip/Postal Code of that specific area</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     po:{\n             \"area\": \"Ranip\",\n             \"state\": \"Gujarat\",\n             \"city\": \"Ahemdabad\",\n             \"country\": \"India\",\n             \"postalCode\": \"382487\",\n             \"isActive\": true,\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record added successfully</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Newly added record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"message\": \"Record added sucessfully\",\n     \"data\": {\n         \"id\": 21,\n         \"area\": \"maninagar\",\n         \"state\": \"Gujarat\",\n         \"city\": \"Ahemdabad\",\n         \"country\": \"India\",\n         \"postalCode\": \"382487\",\n         \"isActive\": true,\n         \"updatedDate\": \"2021-04-29T05:25:26.660Z\",\n         \"createdDate\": \"2021-04-29T05:25:26.660Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not added successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No records found\n{\n  \"message\": \"Record not added successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/poMaster.js",
    "groupTitle": "POMaster"
  },
  {
    "type": "get",
    "url": "/pomaster/:id",
    "title": "To fetch pomaster with unique id",
    "name": "fetchPoMaster",
    "group": "POMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique POMaster id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "POMasterDetail": [
          {
            "group": "POMasterDetail",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique id of PoMaster</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>Name of the area</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Name of the state</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Name of the city</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Name of the country</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "String",
            "optional": false,
            "field": "postalCode",
            "description": "<p>Zip/Postal Code of that specific area</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "deletedDate",
            "description": "<p>Date when the entry was deleted</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "updatedDate",
            "description": "<p>Date when the entry was updated</p>"
          },
          {
            "group": "POMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "CreatedDate",
            "description": "<p>Date when the entry was created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"id\": 1,\n      \"area\": \"Ranip\",\n      \"state\": \"Gujarat\",\n      \"city\": \"Ahemdabad\",\n      \"country\": \"India\",\n      \"postalCode\": \"382487\",\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be a number</p>"
          }
        ],
        "POMasterNotFound": [
          {
            "group": "POMasterNotFound",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>PoMaster with unique id not found</p>"
          },
          {
            "group": "POMasterNotFound",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>EmptyArray</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No records found\n{\n  \"message\": \"No records found\"\n   \"data\":[]\n}\n ///////OR///////////\n HTTP/1.1 500 No records found\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/poMaster.js",
    "groupTitle": "POMaster"
  },
  {
    "type": "delete",
    "url": "/skillmaster/:id",
    "title": "To delete the SkillMaster with unique id",
    "name": "DeleteSkillMaster",
    "group": "SkillMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of SkillMaster</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record deleted successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message: Record deleted successfully\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not deleted successfully</p>"
          }
        ],
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be an integer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Record not deleted successfully\n{\n  \"message\": \"Record not deleted successfully\"\n}\n ///////OR///////////\n HTTP/1.1 500 Invalid Id Type\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/skillMaster.js",
    "groupTitle": "SkillMaster"
  },
  {
    "type": "get",
    "url": "/skillmaster",
    "title": "To fetch all skillmaster data",
    "name": "SkillMasterList",
    "group": "SkillMaster",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>No of data to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sort_by",
            "description": "<p>Sort data according to the field provided</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"ASCE\"",
              "\"DESC\""
            ],
            "optional": false,
            "field": "sort_order",
            "description": "<p>Sort data according to ASCENDING or DESCENDING</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of all the SkillMaster data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": [{\n     \"id\": 1,\n     \"title\":\"Node\"\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\" *\n      },\n      {\n      \"id\": 2,\n     \"title\":\"PHP\"\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\" *\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "SkillMasterNotFound": [
          {
            "group": "SkillMasterNotFound",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>No records were found</p>"
          },
          {
            "group": "SkillMasterNotFound",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Empty Array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No records found\n{\n  \"message\": \"No records found\"\n   \"data\":[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/skillMaster.js",
    "groupTitle": "SkillMaster"
  },
  {
    "type": "put",
    "url": "/skillmaster/:id",
    "title": "To update the SkillMaster with unique id",
    "name": "UpdateSkillMaster",
    "group": "SkillMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of SkillMaster</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the SkillMaster</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": true,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n skill:{\n          \"title\": \"React\",\n          \"isActive\": true,\n }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record updated successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message: Record updated successfully\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not updated successfully</p>"
          }
        ],
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be an integer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Record not updated successfully\n{\n  \"message\": \"Record not updated successfully\"\n}\n ///////OR///////////\n HTTP/1.1 500 Invalid Id Type\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/skillMaster.js",
    "groupTitle": "SkillMaster"
  },
  {
    "type": "post",
    "url": "/skillmaster",
    "title": "To add new SkillMaster",
    "name": "addSkillMaster",
    "group": "SkillMaster",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of SkillMaster</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    skill:{\n         \"title\": \"Node\",\n         \"isActive\": true,\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record added successfully</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Newly added record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"message\": \"Record added sucessfully\",\n     \"data\": {\n         \"id\": 21,\n         \"title\": \"PHP\",\n         \"isActive\": true,\n         \"updatedDate\": \"2021-04-29T05:25:26.660Z\",\n         \"createdDate\": \"2021-04-29T05:25:26.660Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not added successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No records found\n{\n  \"message\": \"Record not added successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/skillMaster.js",
    "groupTitle": "SkillMaster"
  },
  {
    "type": "get",
    "url": "/skillmaster/:id",
    "title": "To fetch skillmaster with unique id",
    "name": "fetchSkillMaster",
    "group": "SkillMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique SkillMaster id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "SkillMasterDetail": [
          {
            "group": "SkillMasterDetail",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique id of SkillMaster</p>"
          },
          {
            "group": "SkillMasterDetail",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of SkillMaster</p>"
          },
          {
            "group": "SkillMasterDetail",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          },
          {
            "group": "SkillMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "deletedDate",
            "description": "<p>Date when the entry was deleted</p>"
          },
          {
            "group": "SkillMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "updatedDate",
            "description": "<p>Date when the entry was updated</p>"
          },
          {
            "group": "SkillMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "CreatedDate",
            "description": "<p>Date when the entry was created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"id\": 2,\n     \"title\":\"PHP\"\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be a number</p>"
          }
        ],
        "SkillMasterNotFound": [
          {
            "group": "SkillMasterNotFound",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>SkillMaster with unique id not found</p>"
          },
          {
            "group": "SkillMasterNotFound",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>EmptyArray</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No records found\n{\n  \"message\": \"No records found\"\n   \"data\":[]\n}\n ///////OR///////////\n HTTP/1.1 500 Invalid Id Type\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/skillMaster.js",
    "groupTitle": "SkillMaster"
  },
  {
    "type": "delete",
    "url": "/technologymaster/:id",
    "title": "To delete the TechnologyMaster with unique id",
    "name": "DeleteTechnologyMaster",
    "group": "TechnologyMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of TechnologyMaster</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record deleted successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message: Record deleted successfully\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not deleted successfully</p>"
          }
        ],
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be an integer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Record not deleted successfully\n{\n  \"message\": \"Record not deleted successfully\"\n}\n ///////OR///////////\n HTTP/1.1 500 Invalid Id Type\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/technologyMaster.js",
    "groupTitle": "TechnologyMaster"
  },
  {
    "type": "get",
    "url": "/technologymaster",
    "title": "To fetch all TechnologyMaster data",
    "name": "TechnologyMasterList",
    "group": "TechnologyMaster",
    "parameter": {
      "fields": {
        "Query Params": [
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page Number</p>"
          },
          {
            "group": "Query Params",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>No of data to be returned</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "optional": false,
            "field": "sort_by",
            "description": "<p>Sort data according to the field provided</p>"
          },
          {
            "group": "Query Params",
            "type": "String",
            "allowedValues": [
              "\"ASCE\"",
              "\"DESC\""
            ],
            "optional": false,
            "field": "sort_order",
            "description": "<p>Sort data according to ASCENDING or DESCENDING</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of all the TechnologyMaster data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"data\": [{\n     \"id\": 1,\n     \"title\":\"JS\"\n     \"parentId\":null\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\" *\n      },\n      {\n      \"id\": 2,\n     \"title\":\"Node\"\n     \"parentId\":1\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\" *\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "TechnologyMasterNotFound": [
          {
            "group": "TechnologyMasterNotFound",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>No records were found</p>"
          },
          {
            "group": "TechnologyMasterNotFound",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Empty Array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No records found\n{\n  \"message\": \"No records found\"\n   \"data\":[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/technologyMaster.js",
    "groupTitle": "TechnologyMaster"
  },
  {
    "type": "put",
    "url": "/technologymaster/:id",
    "title": "To update the TechnologyMaster with unique id",
    "name": "UpdateTechnologyMaster",
    "group": "TechnologyMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique Id of TechnologyMaster</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the TechnologyMaster</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "parentId",
            "description": "<p>ParentId of that TechnologyMaster</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": true,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\ntechnology:{\n         \"title\": \"React\",\n         \"parentId\": 1,\n         \"isActive\": true,\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record updated successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    message: Record updated successfully\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not updated successfully</p>"
          }
        ],
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be an integer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Record not updated successfully\n{\n  \"message\": \"Record not updated successfully\"\n}\n ///////OR///////////\n HTTP/1.1 500 Invalid Id Type\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/technologyMaster.js",
    "groupTitle": "TechnologyMaster"
  },
  {
    "type": "post",
    "url": "/technologymaster",
    "title": "To add new TechnologyMaster",
    "name": "addTechnologyMaster",
    "group": "TechnologyMaster",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of TechnologyMaster</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "parentId",
            "description": "<p>Parent Technology of that TechnologyMaster</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n technology:{\n         \"title\": \"Node\",\n         \"parentId\": 1,\n         \"isActive\": true,\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record added successfully</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Newly added record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"message\": \"Record added sucessfully\",\n     \"data\": {\n         \"id\": 2,\n         \"title\": \"Node\",\n         \"parentId\":1\n         \"isActive\": true,\n         \"updatedDate\": \"2021-04-29T05:25:26.660Z\",\n         \"createdDate\": \"2021-04-29T05:25:26.660Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Record not added successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No records found\n{\n  \"message\": \"Record not added successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/technologyMaster.js",
    "groupTitle": "TechnologyMaster"
  },
  {
    "type": "get",
    "url": "/technologymaster/:id",
    "title": "To fetch TechnologyMaster with unique id",
    "name": "fetchTechnologyMaster",
    "group": "TechnologyMaster",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique TechnologyMaster id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "TechnologyMasterDetail": [
          {
            "group": "TechnologyMasterDetail",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique id of TechnologyMaster</p>"
          },
          {
            "group": "TechnologyMasterDetail",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of TechnologyMaster</p>"
          },
          {
            "group": "TechnologyMasterDetail",
            "type": "Number",
            "optional": false,
            "field": "parentId",
            "description": "<p>Parent Technology of that TechnologyMaster</p>"
          },
          {
            "group": "TechnologyMasterDetail",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Boolean value if that data is active/inactive</p>"
          },
          {
            "group": "TechnologyMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "deletedDate",
            "description": "<p>Date when the entry was deleted</p>"
          },
          {
            "group": "TechnologyMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "updatedDate",
            "description": "<p>Date when the entry was updated</p>"
          },
          {
            "group": "TechnologyMasterDetail",
            "type": "Date",
            "optional": false,
            "field": "CreatedDate",
            "description": "<p>Date when the entry was created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"id\": 2,\n     \"title\":\"PHP\"\n     \"parentId\":1\n      \"isActive\": true,\n      \"deletedDate\": null,\n      \"createdDate\": \"2021-04-28T13:21:54.000Z\",\n      \"updatedDate\": \"2021-04-28T13:21:54.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Invalid Id Type": [
          {
            "group": "Invalid Id Type",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Id must be a number</p>"
          }
        ],
        "TechnologyMasterNotFound": [
          {
            "group": "TechnologyMasterNotFound",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>TechnologyMaster with unique id not found</p>"
          },
          {
            "group": "TechnologyMasterNotFound",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>EmptyArray</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 No records found\n{\n  \"message\": \"No records found\"\n   \"data\":[]\n}\n ///////OR///////////\n HTTP/1.1 500 Invalid Id Type\n{\n  \"error\": \"Id must be a number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "docs/src/technologyMaster.js",
    "groupTitle": "TechnologyMaster"
  }
] });
