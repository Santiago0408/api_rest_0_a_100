/** Dto */
const userdto = require("../../model/dto/user.dto");
const config = require("config");
const helper = require("../helpers/general.helper");

exports.login = (req, res, next) => {
    userdto.login({ username: req.body.username }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        if (data.length > 0) {
            let pass = helper.DecryptedPassword(data[0].password);
            if (req.body.password === pass) {
                tk = helper.GenerateToken(data[0]);
                return  res.status(200).json(
                    {
                        token: tk
                    }
                );
            } else {
               return  res.status(400).json(
                    {
                        info: "Username or password are incorrrect."
                    }
                );
            }
        }
    });
};
exports.getAll = (req, res, next) => {

    userdto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );

        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

