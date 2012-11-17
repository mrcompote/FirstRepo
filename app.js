var http = require('http'),
    controller = require('./controller'),
    model = require('./model');

http.createServer(controller.worker).listen(model.hostPort);
console.log('Server running at http://'+model.hostName+'/');