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
    role:{
      type: String,
      enum:["Student","admin"],
      default:"student",
    },
    password: {
      type: String,
      required: true,
    },
    careerStage:{
      type: String,
      required:true,
      default:"N/A"
    },
    targetRole:{
      type: String,
      required:true,
      default:"N/A"
    },
    degree:{
      type: String,
      required:true,
      default:"N/A"
    },
    branch:{
      type: String,
      required:true,
      default:"N/A"
    },
    passout:{
      type: String,
      required:true,
      default:"N/A"
    },
    github:{
      type: String,
      required:true,
      default:"N/A"
    },
    leetcode:{
      type: String,
      required:true,
      default:"N/A"
    },
    codechef:{
      type: String,
      required:true,
      default:"N/A"
    },
    hackerrank:{
      type: String,
      required:true,
      default:"N/A"
    },
    careerStage:{
      type: String,
      required:true,
      default:"N/A"
    },
    programmingLanguages:{
      type:[String],
      required:true,
      default:[]
    },
    photo:{
      url:{
        type:String,
        default:""
      },
      publicID:{
        type:String,
        default:""
      }
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
