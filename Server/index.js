import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {
    console.log("Server Running")
    res.json({
        message:"My Backend is sending some messae, Say Hii!!"
    })
})

app.listen(PORT, () => {
    console.log(`App is listening at : ${PORT}`);
})