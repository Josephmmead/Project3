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
  // url for recipe web page - unique index
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
      type: Number,
  },
  EIN: {
      type: Number,
      required: true
  },
  acceptedItems: [String]
});

const Charity = mongoose.model("Charity", charitySchema);

module.exports = Charity;
