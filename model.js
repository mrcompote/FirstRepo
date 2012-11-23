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
 
var markdown = require('markdown').markdown;
  var fs = require("fs");
  var str = fs.readFileSync(file, "utf8");
  var a = markdown.toHTML(str);

    return {
        'content': a,
        'title': path.basename(file, model.dynamicExt),
        'host': model.hostName
    };
};

model.templateFile = model.getFsPath('/test' + model.dynamicExt);

model.template = misc.getFile(model.templateFile);

module.exports = model;
