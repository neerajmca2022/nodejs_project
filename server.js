const http = require('http');

function datacontrol(req,res) {
    res.write ("<h1>Hello this is response by server on port 4000</h1>");
    res.end();


}




http.createServer(datacontrol).listen(4000); 


