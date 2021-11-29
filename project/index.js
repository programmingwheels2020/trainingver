const fsPromise = require("fs").promises;
const http = require("http")
const url = require("url");


const server = http.createServer((req, res) => {

    fsPromise.readFile("./static/index.html")
        .then(data => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data.toString());
            res.end();
        })
        .catch(err => {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.write("Error occured");
            res.end();
        })

    /*
        const queryparam = url.parse(req.url).query;
        let name = "No Name"
        console.log(queryparam);
        if (queryparam) {
            let query = queryparam.split("=");
            name = query[1];
        }
    
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.write(`Greetings!!! ${name}`);
        res.end(); */
})

server.listen(3000);
