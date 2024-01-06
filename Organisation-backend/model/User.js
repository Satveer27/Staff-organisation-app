import mongoose from "mongoose";

const Schema = mongoose.Schema;
//Schema is blueprint for model
const UserSchema = new Schema({
    username:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    hasOrganisationChart:{
        type:Boolean,
        default:false,
    },
    organisationMember:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    ],
    isLeader:{
        type:Boolean,
        default:false,
    },
    hasLeader:{
        type:Boolean,
        default:false,
    },
    leader:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
}, {timestamps:true})

const User = mongoose.model("User", UserSchema);
export default User;