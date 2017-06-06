/*jslint node: true */
"use strict";

var http = require("http");

var server = http.createServer(function (req, res) {
    console.log("req:", req);

    res.writeHead(200);  
    res.end("Hello world!");

});

server.listen(8080);