'use strict';
// const funn = setup.functions["funcFile"]["func1"]
module.exports = {
    welcome: (req,res) => {
        res.status(200).json({
            status: 1,
            message: "Welcome"
        })
    },
    globall: setup.functions["funcFile"]["func1"]
}