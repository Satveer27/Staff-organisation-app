import { verifyToken } from "../utils/verifyToken.js";
import { getTokenFromHeader } from "../utils/getTokenFromHeader.js";

const isLoggedIn = (req, res, next) =>{
    //get token from header
    const token = getTokenFromHeader(req);

    //verify token
    const decodedUser = verifyToken(token);

    //save user into request object
    if(!decodedUser){
        throw new Error('token expired or invalid, please login again')
    }
    else{
        //saving user to userAuthId in request object
        //More flexibility to check for the login user on the route itself
        req.userAuthId = decodedUser?.id;
        next();
    }
    
};

export default isLoggedIn;