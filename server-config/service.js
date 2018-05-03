// module paths
const path = require('path');

const MOD_DIR = path.join(__dirname, '/../', '/modules/');

const modulesDir = function () {
    return MOD_DIR;
}

const moduleDir = function (mod) {
    return path.join(MOD_DIR, mod);
}
const moduleConfigDir = function (mod) {
    const mod_config_path = path.join(__dirname, '/modules/' + mod+'/');
    return mod_config_path;
}
const publicDir = function () {
    const mod_config_path = path.join(__dirname, '/../' + 'public/' );
    return mod_config_path;
}

module.exports = {
    getModulesDir: modulesDir,
    getModuleDir: moduleDir,
    getModuleConfigDir: moduleConfigDir,
    getPublicDir: publicDir,
};