
import mongoose from "mongoose";


const patientSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:String,
    nic:String,
    address:String,
    age:String,
    occupation:String, 
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }
});

patientSchema.statics.findOneByUsernameAndPassword = function (
    username,
    password
  ) {
    return this.findOne({ username, password });
  };




const patient = mongoose.model('patient',patientSchema);

export default patient;