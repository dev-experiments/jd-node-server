const config = require("./../server-config");

const success = function (res, data) {
    res.status(200).send(data);
}
const error = function (res, data) {
    res.status(400).send(data);
}
const file = function (res, fileName) {
    var options = {
        root: __dirname + '/static/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
    res.status(400).sendFile(data);
}

module.exports = {
    success: success,
    error: error,
    file: file
};