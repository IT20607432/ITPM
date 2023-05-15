import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:String,
    email:String,
    phone:String,
    message:String

})

const contactUs = mongoose.model('contactUs',contactSchema);

export default contactUs;

