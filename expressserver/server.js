const express = require("express")
const app = express();
const bodyParser = require("body-parser");

app.use(express.static('public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())



const books = [{
    name: "The monk who sold ferrari",
    author: "Robin Sharma",
    language: "English"
}];

app.get("/books", (req, res) => {
    res.json({ data: books });
})

app.post("/books", (req, res) => {
    books.push(req.body);
    res.json({ message: "Successfully Created" })
})

app.get("/books/:language", (req, res) => {
    console.log(req.params)
    console.log(req.query)
    let newBooks = books.filter((book) => {
        return book.language == req.params.language
    })
    res.json({ data: newBooks })
})

app.delete("/books/:book")
app.put()
/*
app.post("/books", (req, res) => {
    let data = '';
    let dataJson;
    req.on('data', chunk => {
        data += chunk.toString();
    })
    req.on('end', () => {
        dataJson = JSON.parse(data);
        console.log(dataJson)
        books.push(dataJson);
        res.json({ message: "Successfully Added" })
    })


})

*/
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is runnning on ${PORT} port`)
})