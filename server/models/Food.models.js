const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    type: {
        type: String, // will import react select and do dropdown menu
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    description: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    steps: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    under30: {
        type: Boolean
    }

}, {timestamps: true});

// make the Food schema and export
const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;