var http = require("http");
const dir ='C:/xampp/htdocs/me/carduelis.github.io/assets/project_images';
var server = http.createServer(function(request, response) {

  var fs = require('fs'),
    path = require('path')

function dirTree(filename) {
    var stats = fs.lstatSync(filename),
        info = {
            // path: filename,
            name: path.basename(filename)
        };

    if (stats.isDirectory()) {
        info.type = "folder";
        info.children = fs.readdirSync(filename).map(function(child) {
            return dirTree(filename + '/' + child);
        });
    } else {
        // Assuming it's a file. In real life it could be a symlink or
        // something else!
        info.type = "file";
    }

    return info;
}

if (module.parent == undefined) {
    // node dirTree.js ~/foo/bar
    var util = require('util');
    response.write(util.inspect(dirTree(dir), false, null));
    response.end();
}

});

server.listen(1337);
console.log("Server is listening");
console.log(dir);
