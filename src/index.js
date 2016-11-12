var stack = require('callsite'),
    path = require('path'),
    fs = require('fs');

function getPath(nmPath, workingDir) {
    var pathToCheck = path.resolve(workingDir, 'node_modules', nmPath);

    if (fs.existsSync(pathToCheck)) {
        return pathToCheck;
    }

    if (workingDir ==='/') {
        throw new Error('Unable to resolve "' + nmPath +'"');
    }

    return getPath(nmPath, path.dirname(workingDir));
}

module.exports = function(nmPath) {
    var initialPath = path.dirname(stack()[1].getFileName());
    return getPath(nmPath, initialPath);
};