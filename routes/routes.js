const config = require("./../server-config");
const http = require("./../utility/http");

const appRouter = function (app) {
    app.get("/", function (req, res) {
        //res.status(200).send(config);
        http.success(res, config)
        //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
    app.get("/hotels", function (req, res) {

        config.module = config.mod.load('hotels');
        http.success(res, config);
      //  http.file(res, config.module.source)
        //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
    app.get("/doc", function (req, res) {

        config.module = config.load_module('doctors');
       // http.success(res, config);
        http.file(res, config.module.source)
        //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

module.exports = appRouter; 