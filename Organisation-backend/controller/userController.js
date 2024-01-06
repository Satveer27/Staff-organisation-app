import User from "../model/User.js";
import bcrypt from "bcryptjs";
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';

// @description Register users
// @route       Post /api/v1/users/register
// @access      Private/Admin

export const userRegistrationController = asyncHandler(async(req,res)=>{
    const {username, email, password} = req.body;

    //check if user exist
    const userExists = await User.findOne({email});
    if(userExists){
        throw new Error("User already exists");
    }
    else{
        //hash password
        const salt = await bcrypt.genSalt(15);
        const hashedPassword = await bcrypt.hash(password, salt);
        //create user
        const user = await User.create({
            username, 
            email,
            password: hashedPassword,
        })
        //response
        res.status(200).json({
            status:"success",
            msg:"User registered succesfully",
            data: user,
        })
    }
});

// @description Login user
// @route       Post /api/v1/users/login
// @access      Public
export const userLoginController = asyncHandler(async(req, res)=>{
    const {email,password} = req.body;
    
    //Find user in db by email only
    const userFound = await User.findOne({email});

    if(userFound && await bcrypt.compare(password, userFound?.password)){
        res.json({
            status:'success',
            msg:'Success login',
            userFound,
            token: generateToken(userFound.id)
        });
    }
    else{
        throw new Error('Invalid login credentials');
    }  
});

// @description get all users
// @route       GET /api/v1/users/allUsers
// @access      Private/Admin

// @description Update users
// @route       PUT /api/v1/users/:id/update
// @access      Private/Admin

// @description get organisation chart for leader
// @route       GET /api/v1/users/orgchart/leader
// @access      Public

// @description get organisation chart for other employees 
// @route       GET /api/v1/users/orgchart/:id
// @access      Public




