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
export const getAllUserController = asyncHandler(async(req,res)=>{
    const users = await User.find();
    res.json({
        status:"success",
        msg: "Users:",
        users,
    })
})

// @description Update users
// @route       PUT /api/v1/users/:id/update
// @access      Private/Admin
export const updateUserController = asyncHandler(async(req,res)=>{
    const organisationMembers = req.body.organisationMembers;
    const isLeader = req.body.isLeader;
    const isAdmin = req.body.isAdmin;
    const username = req.body.username;
    
    //loop thru the management list
    let orgmembers = []
    const updatedUser = await User.findById(req.params.id);
    if(organisationMembers){
        for(let i=0; i<organisationMembers.length; i++){
            const checkUser = await User.findOne({email: organisationMembers[i]})
            if(!checkUser){
                throw new Error("Sorry but this user does not exist");
            }
            if(checkUser.email === updatedUser.email){
                throw new Error("You cant use same user to add as a organisation member");
            }
            if(updatedUser.hasLeader === true){
                const checkerUser = await User.findById(updatedUser.leader);
                if(checkUser.email === checkerUser.email){
                    throw new Error("You cant use the leader as organisation member");
                }
            }
            
            orgmembers.push(checkUser);
        }

        if(updatedUser.organisationMember.length!=0){
        for(let i=0; i<updatedUser.organisationMember.length ; i++){
            const updateUserLeader = await User.findByIdAndUpdate(updatedUser.organisationMember[i], {
                hasLeader:false,
                leader: null,
            }, 
                {new:true});
        }
        }

        for(let i=0; i<orgmembers.length;i++){
            const updateUserLeader = await User.findByIdAndUpdate(orgmembers[i], {
                hasLeader:true,
                leader: req.params.id,

            }, {new:true});
        }

        //update the user
        const updateUserNow = await User.findByIdAndUpdate(req.params.id, {
            organisationMember: orgmembers,
            isAdmin,
            username,
            isLeader,
        },{
            new: true,
        });
    }
    else{
    //update the user
        const updateUserNow = await User.findByIdAndUpdate(req.params.id, {
            isAdmin,
            username,
            isLeader,
        },{
            new: true,
        });
    }


    //check if user got org chart
    const checkTheUpdatedUser = await User.findById(req.params.id)
    if(checkTheUpdatedUser.organisationMember.length!=0){
        await User.findByIdAndUpdate(req.params.id,{
            hasOrganisationChart:true,
        },{
            new:true
        })
    }
    else{
        await User.findByIdAndUpdate(req.params.id,{
            hasOrganisationChart:false,
        },{
            new:true
        })
    }

    //print the final user
    const user = await User.findById(req.params.id);

    res.json({
        status:"success",
        msg: "Users:",
        user,
    })
})

// @description get organisation chart for leader
// @route       GET /api/v1/users/orgchart/leader
// @access      Public
export const getLeaderOrgChart = asyncHandler(async(req,res)=>{
    const users = await User.find({
        isLeader:true
    })
    const userMembers = users[0].organisationMember;
    
    res.json({
        status:"success",
        msg: "Users:",
        userMembers,
    })
})

// @description get organisation chart for other employees 
// @route       GET /api/v1/users/orgchart/:id
// @access      Public
export const getOrgChartEmployee = asyncHandler(async(req,res)=>{
    const users = await User.findById(
        req.params.id
    )
    if(!users.hasOrganisationChart){
        throw new Error("User has no org chart");
    }
    const userMembers = users.organisationMember;
    
    res.json({
        status:"success",
        msg: "Users:",
        userMembers,
    })
})



