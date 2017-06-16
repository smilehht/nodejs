var server = require("./server");
var router = require("./router");

// console.log();
server.start(router.route);