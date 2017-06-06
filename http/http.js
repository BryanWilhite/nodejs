/*jslint node: true */
"use strict";

var http = require("http");
var port = 8080;

var server = http.createServer(function (req, res) {
    console.log("localAddress:", req.connection.localAddress);
    console.log("localPort:", req.connection.localPort);

    res.writeHead(200);  
    res.end("Hello world!");

});

server.listen(port);
console.log("listening on port:", port);