const mongoose = require("mongoose");

const UserHomeFormSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    mobile: {
      type: Number,
      required: true,
    },

    companyName: {
      type: String,
      required: true,
    },

    logo: {
      type: String,
      required:true,

    },

    descriptionOne: {
      type: String,
      required: true,
    },

    descriptionTwo: {
      type: String,
      required: true,
    },

    descriptionThree: {
      type: String,
      required: true,
    },

    descriptionFour: {
      type: String,
      required: true,
    },

    descriptionFive: {
      type: String,
      required: true,
    },

    descriptionSix: {
      type: String,
      required: true,
    },

    descriptionSeven: {
      type: String,
      required: true,
    },

    descriptionEight: {
      type: String,
      required: true,
    },

    descriptionNine: {
      type: String,
      required: true,
    },

    incubationType: {
      type: String,
      
    },

    descriptionTen: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
    },
    status : {
      type:String,
      default: "waiting"
    },

    SlotNO: {
      type:String,
      default:null
    }
  },
  {
    timestamps: true,
  }
);

const userForm = mongoose.model("userForm", UserHomeFormSchema);

module.exports = userForm;
