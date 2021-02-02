const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({

username: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
},

password: {
    type: String,
    required: true,
    match: ["^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$",
            "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"]
}

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
