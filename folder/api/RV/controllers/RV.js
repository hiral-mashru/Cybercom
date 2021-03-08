'use strict';
// const funn = setup.functions["funcFile"]["func1"]
module.exports = {
    welcome: (req,res) => {
        var params = "Hiral"
        res.status(200).json({
            status: 1,
            message: "Welcome",
            data: setup.functions["funcFile"]["func2"](params),
            service: setup.services["RV"]["serve"]["service1"](params)
        })
    },
    globall: setup.functions["funcFile"]["func1"]
}