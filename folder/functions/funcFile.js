
function func1 (req,res){
    res.json({
        status: 1,
        data: "Function 1"
    })
}

function func2 (params){
    console.log("hii "+params)
    return "hii "+params
}

// setup = { "functions": {} }

setup.functions.funcFile.func1 = func1
setup.functions.funcFile.func2 = func2

// setup.functions["funcFile"]["func1"]