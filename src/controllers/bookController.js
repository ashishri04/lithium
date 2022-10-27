const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")
const AuthorModel = require("../models/authorModel")
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
//=================================================apihandler=====================================================================
const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
//=======================================================================================================================
const getAuthorData= async function (req, res) {
    //let allBooks= await BookModel.find( {authorName : "Chetan Bhagat" } )
    const allBooks = await BookModel.find({author_id : 1})
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
    return allBooks
}
//=====================================================================================================================
const getTheListOfBook = async function (req, res) {
    let getBook= await AuthorModel.find({authorName :"Chetan Bhagat"}).select("author_id")
    console.log(getBook)
    let finalData = await BookModel.find({author_id:getBook[0].author_id})
    console.log(finalData)
    res.send({msg:getBook})
}
//===================================================================================================================
const findAndUpdate= async function (req, res) {
    let newValue= await BookModel.findOneAndUpdate( 
        { name: "Two states"} , //condition
        { $set: {price: 100, age:24} }, //update in data
        { new: true } )
        const authorid =newValue.author_id;
        let author = await AuthorModel.findOne({author_id:authorid})
        res.send({author:author,price: newValue.price});
}
//======================================================================================================================
// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
//}

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.getAuthorData = getAuthorData
module.exports.getTheListOfBook = getTheListOfBook
//module.exports.getBooksData= getBooksData
//module.exports.updateBooks = updateBooks
//module.exports.deleteBooks = deleteBooks
module.exports.findAndUpdate = findAndUpdate