// const User = require('../models/user');
// const redisClient = require('../config/redis');
// const jwt = require("jsonwebtoken");

// const userMiddleWare = async (req, res, next) => {
//     try {
//         const { token } = req.cookies;
//         if (!token) {
//             throw new Error("Token is required");
//         }

//         const payload = jwt.verify(token, process.env.JWT_KEY);
//         const { _id } = payload;

//         if (!_id) {
//             throw new Error("User ID missing in token");
//         }

//         const user = await User.findOne({ _id });
//         if (!user) {
//             throw new Error("User not found");
//         }

//         // Ensure Redis is connected
//         if (!redisClient.isOpen) {
//             await redisClient.connect();
//         }

//         const isBlocked = await redisClient.exists(`token:${token}`);
//         if (isBlocked) {
//             throw new Error("Token is blocked");
//         }

//         req.user = user; // attach user to request
//         next();

//     } catch (err) {
//         console.error("Middleware Error:", err.message);
//         res.status(401).json({ message: "Unauthorized", error: err.message });
//     }
// };

// module.exports = userMiddleWare;






















const jwt = require("jsonwebtoken");
const User = require("../models/user");
const redisClient = require("../config/redis")

const userMiddleware = async (req,res,next)=>{

    try{
        
        const {token} = req.cookies;
        if(!token)
            throw new Error("Token is not persent");

        const payload = jwt.verify(token,process.env.JWT_KEY);

        const {_id} = payload;

        if(!_id){
            throw new Error("Invalid token");
        }

        const result = await User.findById(_id);

        if(!result){
            throw new Error("User Doesn't Exist");
        }

        // Redis ke blockList mein persent toh nahi hai

        const IsBlocked = await redisClient.exists(`token:${token}`);

        if(IsBlocked)
            throw new Error("Invalid Token");

        req.result = result;


        next();
    }
    catch(err){
        res.status(401).send("Error: "+ err.message)
    }

}


module.exports = userMiddleware;
