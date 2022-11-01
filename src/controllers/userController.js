const UserModel= require("../models/userModel")


const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }


const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}
//====================================date========================================================================================
 const newUser =async function(req, res, next){
    let date_time = new Date();
    let date = ("0" + date_time.getDate()).slice(-2);
    let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
    let year = date_time.getFullYear();
    let hours = date_time.getHours();
    let minutes = date_time.getMinutes();
    let seconds = date_time.getSeconds();
    console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
    res.send({msg: "me samay hu !!!!"})
 }
//==============================ip address====================================================================
const getIp = function(req, res, next) {
    const ipAddress = req.socket.remoteAddress;
    console.log(ipAddress)
    res.send({msg: "this is my address!!!!"});
};
 //==============================route==================================================== 

 const getPath = function (req, res, next) {
    console.log(req.path);
    res.send({msg:"ye mere ghr ka rasta !!!!"});
  };

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode
module.exports.newUser = newUser
module.exports.getIp = getIp
module.exports.getPath = getPath