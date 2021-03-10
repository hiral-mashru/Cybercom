module.exports = {
    welcome: (req,res) => {
        var params  = "hiral"
        res.status(200).json({
            status: 1,
            message: "Welcome",
            data: setup.functions["func"]["func2"]["func2"](params)
        })
    }
}