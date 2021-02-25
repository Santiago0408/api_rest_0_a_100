/**packages */

const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    code:{
        type: "String",
        require:true
    },
    name:{
        type: "String",
        require:true
    }

});

/**schema sxportations */
module.exports = courseSchema;
