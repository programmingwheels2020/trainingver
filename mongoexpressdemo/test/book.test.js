let chai = require("chai")
let chaiHtpp = require("chai-http");
const { deleteOne } = require("../model/book.model");

let server = require("../server")

let should = chai.should();

chai.use(chaiHtpp)

describe("Get Books API", () => {
    before((done) => {
        console.log("This is executed Before")
        done();
    })
    beforeEach(async () => {
        console.log("This will be exectuted in each unit test cases")
    })
    after(async () => {
        console.log("This is executed after")
    })
    afterEach(async () => {
        console.log("This is executed after each")
    })
    it("Should GET all the books details", (done) => {

        chai.request(server)
            .get("/api/v1/book/books")
            .end((err, res) => {
                //console.log(err)
                //console.log(res.body)
                res.should.have.status(200);
                res.body.data.should.be.a('array')
                done()
            })

    })
    it("Should GET all the books details Duplicate", (done) => {

        chai.request(server)
            .get("/api/v1/book/books")
            .end((err, res) => {
                //console.log(err)
                //console.log(res.body)
                res.should.have.status(200);
                res.body.data.should.be.a('array')
                done()
            })

    })
})