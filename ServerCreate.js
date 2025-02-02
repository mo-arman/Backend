let http = require('http');

let server = http.createServer((req,res) => {
    
    if(req.url == "/news"){

    }
    if(req.url == "/about"){

    }
    if(req.url == "/Course"){
       req.end("Welcome to Course Page");
    }
    if(req.url == "/"){
        req.end("Welcome to ws");
    }

});

// 
 server.listen("3000");