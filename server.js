const http = require('http');

const app = require('./app');

const port = process.env.PORT||5000 ;

const server = http.createServer(app);

 // listen for request
server.listen(port,()=>{
    console.log("server is running on port", port);
   });
