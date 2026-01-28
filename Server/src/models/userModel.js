import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    careerStage:{
      type: String,
      required:true,
      default:""
    },
    targetRole:{
      type: String,
      required:true,
      default:""
    },
    degree:{
      type: String,
      required:true,
      default:""
    },
    branch:{
      type: String,
      required:true,
      default:""
    },
    passout:{
      type: String,
      required:true,
      default:""
    },
    github:{
      type: String,
      required:true,
      default:""
    },
    leetcode:{
      type: String,
      required:true,
      default:""
    },
    codechef:{
      type: String,
      required:true,
      default:""
    },
    hackerrank:{
      type: String,
      required:true,
      default:""
    },
    careerStage:{
      type: String,
      required:true,
      default:""
    },
    programmingLanguages:{
      type:[String],
      required:true,
      default:[]
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
