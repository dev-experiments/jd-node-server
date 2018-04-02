const config = require("./../server-config");
const http = require("./../utility/http");
const hotelRouter = require("./hotel-router");

const Router = function (app, express) {
    app.get("/", function (req, res, next) {
        http.success(res, config);
    });
    hotelRouter(app, express);
    app.get("/doc", function (req, res, next) {

        config.module = config.mod.load('doctors', next);
        app.use("/static", express.static(config.mod.module.public_path));
        //  http.file(res, config.module.source)
        //http.success(res, config);
        http.modFileSend(res, next);
    });
}

module.exports = Router; 