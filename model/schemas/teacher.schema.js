/**packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

const teacherSchema = new mongoose.Schema({
    document:{
        type: "String",
        require:true,
        unique: true
    },
    name:{
        type: "String",
        require:true
    },
    lastname:{
        type: "string",
        require:true
    },
    email:{
        type: "String",
        require:true,
        unique:true
    },
    phone:{
        type: "String",
        require:true
    },
    office:{
        type: "String",
        require:true
    },
    deparment:{
        type: "String",
        require:true
    }

});

/**schema sxportations */
teacherSchema.plugin(validator);
module.exports = teacherSchema;
