const fs = require('fs')

const requstHandler = (req,res) => {
    // console.log(req.url, req.method, req.headers)//u can see it without loading localhost://3000 page.
    // process.exit()//u can see req afetr loading localhost://3000 page,not before that.
    const url = req.url
    if(url === '/'){
        res.write('<html>')
        res.write('<head></head><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end() //not to go next line, it will end it here
    }
    if(url === '/message' && req.method === 'POST'){
        //when we use post method, data will go to its destination (/message) in chunks 
        //buffer is bus stop where all data is getting in chunks and out from chunks, it's a construct which allows you to hold multiple chunks and work with them before they are released once they are done.
        const body = []
        req.on('data',(chunk)=>{
            console.log("chunk",chunk)
            body.push(chunk)
        })//on allows us to listen certain events, here i want to listen data event. data event will be fired whenever new chunk is ready, 2nd argument is a function that should be executedfor every data
        return req.on('end',()=>{ //function expresssion=> async
            const parseBody = Buffer.concat(body).toString()
            console.log(parseBody)//key-value pair
            const message = parseBody.split('=')[1]
            fs.writeFile('message.txt',message,(err)=>{ //it'll execute after 1st 2 arguments
                res.statusCode = 302
                res.setHeader('Location','/')
                return res.end()//return is used to not execute next lines, otherwise we'll get error.
            })
        })
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head></head><body><h1>Hy!</h1></body>')
    res.write('</html>')
    res.end()
}

// module.exports = requstHandler OR
module.exports = {
    handler: requstHandler,
    someText: 'text'
}
// OR
// module.exports.handler = requstHandler,
// module.exports.someText = 'text'

// exports.handler = requstHandler,
// exports.someText = 'text'