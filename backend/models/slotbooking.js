const mongoose = require('mongoose');

const SlotBooking = mongoose.Schema(

    {
        applicationId : {

            type:mongoose.Types.ObjectId,
            default: null

        },

        seatNo: {
            type:String,
            default:null

        },

        isActive : {
            type:Boolean,
            default:false
        }


    }
) 

const slot = mongoose.model('slot',SlotBooking);

module.exports = slot