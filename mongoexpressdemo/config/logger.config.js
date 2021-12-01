const winston = require("winston")
const { ElasticsearchTransport } = require('winston-elasticsearch');

const esTransportOpts = {
    level: 'info',
    clientOpts: { node: "http://localhost:9200" }
};
const esTransport = new ElasticsearchTransport(esTransportOpts);

const Logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'book-store-application' },
    transports: [
        new winston.transports.Console({ level: 'debug' }),
        new winston.transports.File({ filename: 'info.log', level: 'info' }),
        new winston.transports.File({ filename: 'combined.log' }),
        esTransport
    ]
})

module.exports = Logger