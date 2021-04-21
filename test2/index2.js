
var customerSchema = {
    name: 'hiral',
    id: '1'
}

module.exports = function (http) {
    http.get('/', returnSchema);
    
    returnSchema.doc = {
        produces:'application/json',
        description: 'The JSON schema of customers',
        public: true,
        httpStatus:{
            '200':'JSON with json schema'
        }
    };
    function returnSchema(req, res) {
        res.json(customerSchema);
    }
}