const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
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
  causes: [String],
  mission: {
    type: String,
    default: ""
  },
  contactEmail: {
    type: String,
    default: ""
  },
  acceptedItems: [String],
  donationMethod: {
    type: String,
    default: ""
  }

});

const Charity = mongoose.model("Charity", charitySchema);

module.exports = Charity;


