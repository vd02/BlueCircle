const mongoose = require("mongoose");
const ambulanceSchema = new mongoose.Schema({
  isBeingUsedAmb1: {
    type: Boolean,
    default: false,
  },
  isBeingUsedAmb2: {
    type: Boolean,
    default: false,
  },
  isBeingUsedBed1: {
    type: Boolean,
    default: false,
  },
  isBeingUsedBed2: {
    type: Boolean,
    default: false,
  },
  isBeingUsedBed3: {
    type: Boolean,
    default: false,
  },
  isBeingUsedBed4: {
    type: Boolean,
    default: false,
  },
});

const statusModel = mongoose.model("Status", ambulanceSchema);
module.exports = statusModel;
