import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required:true,
    minlength:[3,"First name must contain atleast three characters!"]
  },
  lastName:{
    type: String,
    required:true,
    minlength:[3,"Last name must contain atleast three characters!"]
  },
  email:{
    type: String,
    required:true,
    validate: [validator.isEmail,"Please provide a valid Email address"]
  },
  phone:{
    type: String,
    required:true,
    minlength:[10,"Phone number must contain 10 digits!"],
    maxlength:[10,"Phone number must contain 10 digits!"],
  },
  message:{
    type: String,
    required:true,
    minlength:[10,"Message must contain atleast 10 characters!"],
  },
});

export const Message= mongoose.model("Message", messageSchema);