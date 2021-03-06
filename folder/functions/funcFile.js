
function func1 (req,res){
    res.json({
        status: 1,
        data: "Function 1"
    })
}

// setup = { "functions": {} }

setup.functions.funcFile.func1 = func1

// setup.functions["funcFile"]["func1"]