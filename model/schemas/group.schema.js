/**packages */

const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_course",
        require: true
    },
    period_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_period",
        require: true
    },
    teacher_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_teacher",
        require: true
    },
    number: {
        type: "Number",
        require: true
    }


});

/**schema sxportations */
module.exports = groupSchema;
