module.exports = {
    welcome: (req,res) => {
        res.status(200).json({
            status: 1,
            message: "Welcome"
        })
    }
}