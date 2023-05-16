import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },

    username : {
        type : String,
        required : true,
        unique: true
    },

    email:String,
    nic:String,
    address:String,
    age:String,
    licenseNo: String,
    specilization: String,
    experience: String,
    workplace:String,
    password:String
});

doctorSchema.statics.findOneByUsernameAndPassword = function (
    username,
    password
  ) {
    return this.findOne({ username, password });
  };


  const doctor = mongoose.model('doctor',doctorSchema);

  export default doctor;