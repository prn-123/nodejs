const http = require('http');
const port = 3331; 
const hostname = '127.0.0.1'; 
http.get('http://127.0.0.1:3333/', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];
}