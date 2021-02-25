
const controller = require("../controller/logic/user.Controller");

module.exports = (app) => {
    app.get("/user", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.post("/user", (req, res, next) => {
        controller.login(req, res, next);
    });
}