const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charitySchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  password: {
    type: String,
    required: true,
    // match: ["^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$",
    //         "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"]
  },
  name: {
    type: String,
    default: ""
  },
  // url string for thumbnail image
  thumbnail: {
    type: String,
    default: ""
  },
  // url for CI page - unique index
  href: {
    type: String,
    default: "",
  },
  address: {
      type: String,
      default: ""
  },
  city: {
      type: String,
      default: ""
  },
  state: {
    type: String,
  },
  zipCode: {
      type: String,
      
  },
  phone: {
    type: String,
    default: ""
  },
  EIN: {
      type: String,
      default:""
  },
  mainCause:{
     type: String,
  },
  causes: [String],
  mission: {
    type: String,
    default: ""
  },
  contactEmail: {
    type: String,
  },
  acceptedItems: [String],
  donationMethod: {
    type: String,
  }

});

const Charity = mongoose.model("Charity", charitySchema);

module.exports = Charity;


