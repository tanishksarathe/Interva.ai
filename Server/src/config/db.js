import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");
    console.log(
      `Name and the host address is : ${conn.connection.host} , ${conn.connection.name}`
    );
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
