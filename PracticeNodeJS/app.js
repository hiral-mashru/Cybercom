const http = require('http')
const server =  http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers)//u can see it without loading localhost://3000 page.
    // process.exit()//u can see req afetr loading localhost://3000 page,not before that.
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('</html>')
})
server.listen(3000)
