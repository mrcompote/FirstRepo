var path = require('path'),
    misc = require('./misc');

var model = {};

model.serverRoot = path.join(__dirname, 'www');

model.hostPort = 81;

model.hostName = 'localhost:' + model.hostPort;

model.dynamicExt = '.html';

model.indexName = 'main' + model.dynamicExt;

model.isDynamicFile = function(file){
    return (path.extname(file) === model.dynamicExt);
};

model.getFsPath = function(rPath){
    return path.join(model.serverRoot, rPath);
};

model.getFileData = function(file){
    return {
        'content': misc.getFile(file),
        'title': path.basename(file, model.dynamicExt),
        'host': model.hostName
    };
};

model.templateFile = model.getFsPath('/test' + model.dynamicExt);

model.template = misc.getFile(model.templateFile);

module.exports = model;
