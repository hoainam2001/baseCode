const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        maxlength: 20,
        unique: true
    },
    paymentId: {
        type: String,
        require: true,
        ref: "Payment"
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    fullName: {
        type: String,
        require: true,
        minlength: 6
    },
    point: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        default: "user"
    },

}, { timestamps: true });
module.exports = mongoose.model("User", userSchema);