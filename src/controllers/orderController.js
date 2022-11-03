const { count } = require("console")
const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const UserModel= require("../models/userModel")
const mongoose = require('mongoose')
const userModel = require("../models/userModel")

const ObjectId = mongoose.Schema.Types.ObjectId

const createOrder = async function (req, res) {
    let data= req.body
    isFreeAppUser = data.isFreeAppUser;
    let { userId,productId } = data;
    if(!userId || ObjectId(userId)){
        return res.send({status:false, msg:"userId is required or user is not present"});
     }
     if (!productId || ObjectId(productId)){
        return res.send({ status:false, msg:"productId is required or product is not present"})
     }
     if(isFreeAppUser === "true"){
        let productPrice = await productModel.findById(productId).select({price:1,_Id:0})
           productPrice = productPrice.price
           let userBalance = await UserModel.findById(userId).select({balance:1,_id:0})
           userBalance = userBalance.balance;

           if(userBalance>= productPrice){
            data.price = productPrice;
            data.isFreeAppUser = false;
            let saveData = await orderModel.create(data)
           // let updateUser = await userModel.findByIdAndUpdate({_id: userId},{$inc:{balance: productPrice}},{new: true}).select({balance:0})
            return res.send({msg: saveData})
           }
           return res.send({msg: "Insufficient balance"})
     }
     else{
         data.price = 0 
    let saveData = await orderModel.create(Order)
    res.send({ data: saveData})
    
}
}

module.exports.createOrder = createOrder
