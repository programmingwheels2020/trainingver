const fs = require("fs");
const zlib = require("zlib")

let data = 'Hello ! How are you';

const helloStream = fs.createReadStream("/Users/leninlawrence/Desktop/vertraining/sample/hello.txt");
const helloWriteStream = fs.createWriteStream("./lenin.txt");
const hellogzipfile = fs.createWriteStream("./lenin.txt.gz");

helloStream.pipe(helloWriteStream)

helloStream.pipe(zlib.createGzip()).pipe(hellogzipfile)




