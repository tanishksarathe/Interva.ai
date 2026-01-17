import User from "../models/userModel";

export const registrationController = async (req, res, next) => {

    try {
        
        const {fullname, email, phone, password} = req.body;

        if(!fullname || !email || !phone || !password) {
            const error = new Error("All Fields Required");
            error.statusCode = 400;
            return next(error);
        }

        const existingUser = await User.findOne({email});

        if(existingUser){
            const error = new Error("Email Already Exists");
            error.statusCode = 409;
            return next(error);
        }

        //salt generation and password validation

        const newUser = await User.create({fullname, email, phone, password})

        res.status(200).json({message: "User Registered Successfully"});

    } catch (error) {
        console.log(error);
        return next(error);
    }

}


export const loginController = async(req, res, next) => {

    try {
        
        const {email, password} = req.body;

        if(!email || !password) {
            const error = new Error("All Fields Required");
            error.statusCode = 400;
            return next(error);
        }

        const existingUser = await User.findOne({email});

        if(!existingUser){
            const error = new Error("Email not exists");
            error.statusCode = 403;
            return next(error);
        }

        //  password verification

        res.status(200).json({message: "User Login Successful", data : existingUser});
        

    } catch (error) {
        console.log(error);
        return next(error);
    }

}