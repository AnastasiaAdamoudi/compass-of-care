const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            minlength: 3,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minlength: 8
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId, // ref to Role model in the MongoDB database
                ref: "Role"
            }
        ]
    })
)

module.exports = User;