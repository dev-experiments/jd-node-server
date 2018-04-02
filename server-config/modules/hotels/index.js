let config = {};
const init = function (sourceDir) {
    config.source = sourceDir ;
    config.boot_file = sourceDir + '/build/index.html';
    config.public_path = sourceDir + '/build/static/';
}
config.name = 'Hotels';
config.init = init;
module.exports = config;