const stack = require('callsite'),
    path = require('path'),
    fs = require('fs');

function getPath(nmPath, workingDir) {
    const pathToCheck = path.resolve(workingDir, 'node_modules', nmPath);
    if (fs.existsSync(pathToCheck)) {
        return pathToCheck;
    }

    if (workingDir ==='/') {
        return undefined;
    }

    return getPath(nmPath, path.dirname(workingDir));
}

module.exports = function(nmPath) {
    const initialPath = path.dirname(stack()[1].getFileName());
    return getPath(nmPath, initialPath);
};