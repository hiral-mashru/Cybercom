var a ="hello"  //---------------------------->global scope            ^
    first();        //---------------------------->global scope        |
    function first(){                                              //  |
        var b="hi"   //---------------------------->1st scope          |scope
        second();    //---------------------------->1st scope          |chain
        function second(){                                         //  |
            var c="hey" //-------------------------->2nd scope         |
            console.log(a+b+c)//hellohihey //------->2nd scope         |
            third()
          }
       }
function third(){
    var d = "hoo"
    console.log(c) //it can only access a and d variables bcz execution stack and scope chain are working in opposite side.
}
//execution stack starts working from global execution context to execution stack 
//and scope chain starts working from execution context to global execution context.