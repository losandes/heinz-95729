module.exports = function Server () {
    'use strict';

    const http = require('http');
    const ProductRepo = require('./ProductRepo');
    const productRepo = new ProductRepo();
    const port = 3000;

    const server = http.createServer((request, response) => {
        let productId = request.url.substring(request.url.lastIndexOf('/') + 1);
        productRepo.get(productId)
            .then(product => {
                response.writeHead(200, {"Content-Type": "application/json"});
                response.end(JSON.stringify(product));
            })
            .catch(() => {
                response.writeHead(404);
                response.end();
            });
    });

    server.listen(port);
    // console.log(`Server running at http://localhost:${port}/`);

    return server;
};
