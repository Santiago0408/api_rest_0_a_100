/**packages */

const mongoose = require("mongoose");

const studet_groupSchema = new mongoose.Schema({
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_student",
        require: true
    },
    group_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_group",
        require: true
    }

});

/**schema sxportations */
module.exports = studet_groupSchema;
