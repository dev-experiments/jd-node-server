const modules_config = require('./modules-default-config');
const service = require('./service');
const path = require('path');

process.env.NODE_ENV = "development";
process.env.PORT = 8080;

const hostname = (process.env.NODE_ENV == 'development')
    ? "http://t.justdial.com/verticals/hotel"
    : "http://localhost:8080/hotels";

let server = {};
server.hostname = hostname;
server.public_dir = service.getPublicDir();

const load_module = function (module, next) {
    const mod_config_path = service.getModuleConfigDir(module) + '/index.js';

    let mod = {};
    try {
        mod = require(mod_config_path);
        mod.init(service.getModuleDir(module));
    }
    catch (e) {
        res.status=500;
        next(new Error('Error in loading module..!! :-(')); 
    }
    config.mod.module = mod;
    //return mod;
}
let config = {
    server: server,
    mod: {
        props: modules_config,
        load: load_module,
        module: {},
    },
    service: service,
}
module.exports = config;