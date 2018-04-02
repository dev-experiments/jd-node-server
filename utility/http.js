const config = require("./../server-config");

const success = function (res, data) {
    res.status(200).send(data);
}
const error = function (res, data) {
    res.status(400).send(data);
}
const modFile = function (res, next, fileName) {
    console.log('==>',config.mod.module.source);
    var options = {
        root: config.mod.module.source,
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    res.sendFile('build/index.html', options, function (err) {
        if (err) {
            res.status = 500; 
            next(new Error('Module source index file missing ' + err.message));
          } 
    });
    //res.status(400).sendFile(data);
}

module.exports = {
    success: success,
    error: error,
    modFileSend: modFile
};