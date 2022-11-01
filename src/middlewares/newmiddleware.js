

const commonMiddileware = function (req, res, next) {
  req.mv= "hi there. i am adding something new to the req object"
console.log("Hi I am a middleware.i am display time,ip,user!!!!!") 
  next()
}





module.exports.commonMiddileware = commonMiddileware
