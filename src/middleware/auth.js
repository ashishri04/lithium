 const jwt = require("jsonwebtoken");
// const userModel = require("../models/userModel")
const authenticate = function (req, req, next) {
    //check the token in request header

    let token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "token must be present in the request header" })
    //validate this token
    try {
        let decodedToken = jwt.verify(token, "functionup-lithium");
        if (!decodedToken)
            return res.send({ status: false, msg: "token is invalid" });

        next();
    } catch (error) {
        console.error(error)
        res.status(401).send({ message: "Token Invalid" })
    }

    next()
};

const authorise = function (req, res, next) {
    // comapre the logged in user's id and the id in request
   try{
    if (user.userId !== userId) {
        return res.send("Invalid Credentials");
    }
}catch(error){
    res.status(404).send({message:"user not found"})
}
    // if (user.password !== password) {
        // return res.send("Invalid Credentials");
    // }


    next()
}
module.exports.authenticate = authenticate
module.exports.authorise = authorise