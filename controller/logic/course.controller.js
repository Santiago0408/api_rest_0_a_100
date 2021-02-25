/** Dto */
const coursedto = require("../../model/dto/course.dto");
const config = require("config");

exports.createCourse = (req, res, next) => {
    let course = {
        code: req.body.code,
        name: req.body.name
    };
    coursedto.create(course, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};


exports.updateCourse = (req, res, next) => {
    let course = {
        code: req.body.code,
        name: req.body.name
    };
    coursedto.update({ _id: req.body.id }, course, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );

    });
};

exports.getAll = (req, res, next) => {
    coursedto.getAll({}, (err, data) => {
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
exports.getByCode = (req, res, next) => {

    coursedto.getByCode({ code: req.params.code }, (err, data) => {
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

exports.deleteCourse = (req, res, next) => {
    coursedto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );

        }
        res.status(204).json();
    });
};