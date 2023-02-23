const mongoose = require("mongoose");



const authSchema = mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    age: { type: Number, required: false }
}, {
    versionKey: false
});



const AuthModel = mongoose.model("user", authSchema);



module.exports = { AuthModel };