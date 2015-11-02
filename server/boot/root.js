var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

proxy.on('error', function (err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });

  res.end('Something went wrong. And we are reporting a custom error message.');
});

proxy.on('upgrade', function (req, socket, head) {
  proxy.ws(req, socket, head);
});

module.exports = function(server) {
  // Install a `/` route that returns server status
  // var router = server.loopback.Router();
  // router.get('/', function(req, res){
  //   proxy.web(req, res, {target:'http://localhost:3000'});
  // });
  //
  // router.all('/browser-sync/*', function (req, res){
  //   console.log('browser-sync request');
  //   proxy.web(req,res,{target:'http://localhost:3000'});
  // });
  // server.use(router);
};
