var http = require("http");
var url = require("url");
var times = 0;

function start(route) {
  function onRequest(request, response) {

    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World\n");
    response.write('url:'+request.url+'\n');
    response.write('fileName:'+__filename);
    response.write('\n');
    response.write('dirName:'+__dirname);
    response.end();

  }

  http.createServer(onRequest).listen(8888);

  console.log("Server has started.");
  var timer = setInterval(function(){

    console.log('this is a timer:' + (times++));

    if (times == 3) {
      console.error('清除定时器');
      console.info('清除定时器');
      // console.trace('清除定时器');
      clearTimeout(timer);
    }
    

  },1000);
}

exports.start = start;