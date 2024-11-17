const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const protectRoute = async(req, res ,next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized : No Token provided"});
        }
        const decode = jwt.verify(token , process.env.JWT_SECRET);

        if(!decode){
            return res.status(401).json({error: "Unauthorized: Invalid Token" });
        }
        const user = await User.findById(decode.userId).select("-password");
        if(!user){
            return res.status(404).json({error: "User not found"});
        }
        req.user = user;
		next();
    } catch (error) {
        console.log("Error in ProtectRoute middleware" ,error.message);
        return res.status(500).json({error:"Internal server Error"});
    }
};

module.exports ={
    protectRoute
}
