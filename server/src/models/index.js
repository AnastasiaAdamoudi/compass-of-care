const mongoose = require("mongoose");
mongoose.Promise

const db = {};

db.mongoose = mongoose;

db.user = require("./user-model");
db.role = require("./role-model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;