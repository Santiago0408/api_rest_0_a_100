/**packages */

const mongoose = require("mongoose");

const periodSchema = new mongoose.Schema({
    year:{
        type: "Number",
        require:true,
        min:2020,
        max:2030
    },
    number:{
        type: "Number",
        require:true,
        min:1,
        max:2
    },
    current:{
        type: "Boolean",
        require:true,
        default: true
    }

});

/**schema sxportations */
module.exports = periodSchema;
