const path = require('path');
const MOD_DIR = path.join(__dirname,'/../../../', '/modules/') ;

const source = MOD_DIR + 'doctors/build/index.html';

module.exports={
    name: 'Doctors',
    source: source
}

