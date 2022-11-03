const { count } = require("console")
const productModel = require("../models/productModel")

const createProduct = async function (req, res) {
    let Product = req.body
    let createProduct = await productModel.create(Product)
    res.send({ data: createProduct })
    
}

module.exports.createProduct = createProduct
