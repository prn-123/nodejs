var http= require('http');
var fs= require('fs')


var hostname= '127.0.0.1';
var port= 3000;

const server = http.createServer((req, res)=>
{
 if(req.method === "GET")
 {
 res.writeHead(200);
 console.log(req.method);
 console.log(req.headers);
 console.log(req.url);
 fs.readFile('./view/home.html', null, function(err, content){
 if(err){
 res.writeHead(404)
 res.write('Sorry');
 res.end();
 }
 else {
 res.writeHead(200)
 res.write(content);
 res.end();
 }
 
 })
 }
 else if (req.method === "POST") {
 
 var body = "";
 req.on("data", function (details) {
 body += details;
 });

 req.on("end", function(){
 res.writeHead(200);
 res.end(body);
 });
 }
 
 
});

server.listen(port, hostname, ()=> {
 console.log(`server is running at ${hostname}: ${port}`)
})