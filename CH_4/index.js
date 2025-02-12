let http = require('http')

let server = http.createServer((req,res)=>{

    if(req.url== "/news"){
        let obj = {
            status:1,
            data:[
                {
                    newsTitle:'ws',
                    newsData:'Data'
                },
                {
                    newsTitle:'ws',
                    newsData:'Data'
                },
                {
                    newsTitle:'ws',
                    newsData:'Data'
                },
                {
                    newsTitle:'ws',
                    newsData:'Data'
                },
                {
                    newsTitle:'ws',
                    newsData:'Data'
                }
            ]
        }
        res.end(JSON.stringify(obj))
    }
    if(req.url== "/about"){
        console.log("about")
    }
    if(req.url== "/home"){
        console.log("home")
    }
    if(req.url== "/cart"){
        console.log("cart")
    }
    res.end("<h1>Welcome to WS</h1>")
});


server.listen("3000"); // Port Number