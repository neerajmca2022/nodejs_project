const http = require("http");
http.createServer((req,res) =>{
  res.writeHead(200,{'Content-type':'application\json'});
  res.write(JSON.stringify({name:'Neeraj singh',course:"MCA",mobile:9838449263}));
    res.end();
}).listen(4200);