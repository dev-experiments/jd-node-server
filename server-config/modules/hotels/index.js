let config = {};
const init = function (sourceDir) {
    config.source = sourceDir;
    config.public_path = sourceDir;
}
config.name = 'Hotels';
config.init = init;
module.exports = config;