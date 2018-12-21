
const http = require('http');
const port = 3333; 
const hostname = '127.0.0.1'; 
const server = http.createServer((req,res)=>
	{ if(req.url=== '/'){ res.write('New Connection...!!'); 
		res.end(); }  
	if(req.url === '/api/http')
		{ res.write(JSON.stringify(['Pournami','Jincy','Reshma','Sincy','Ramseena'])); 
	res.end(); } });  
server.listen(port, hostname, () => 
  { console.log(`Server running at http://${hostname}:${port}/`); });