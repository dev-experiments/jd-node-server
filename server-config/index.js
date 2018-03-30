const modules_config = require('./modules-default-config');
const modules_service = require('./modules-service');
const path = require('path');

process.env.NODE_ENV = "dev";
const env = process.env.NODE_ENV;

const hostname = (env == 'dev')
    ? "http://t.justdial.com/verticals/hotel"
    : "http://localhost:8080/hotels";

const load_module = function (module, callback) {
    const mod_config_path = modules_service.getModuleConfigDir(module) + '/index.js';
    
    console.log('===', mod_config_path);
    let mod = {};
    try {
        mod = require(mod_config_path);
        mod.init(modules_service.getModuleDir(module));
    }
    catch (e) {
        console.log("Module config file missing.", e);
        process.exit(1);
    }
    config.mod.module = mod;
    //return mod;
}
let config = {
    hostname: hostname,
    mod: {
        props: modules_config,
        service: modules_service,
        load: load_module,
        module: {},
    }
}
module.exports = config;