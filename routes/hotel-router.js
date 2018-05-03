
const config = require("./../server-config");
const http = require("./../utility/http");
const Router = function (app, express) {
    app.get("/hotels", function (req, res, next) {

        config.module = config.mod.load('hotels', next);
        app.use("/static", express.static(config.mod.module.public_path));
        //  http.file(res, config.module.source)
        //http.success(res, config);
        http.modFileSend(res, next);


    });
}

module.exports = Router; 