const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

//Q1.-write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7]
// Your route code will look like this
router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of
    //numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let n = arr.length+1
    let sum_of_natural_no = n*(n+1)/2
    sum_of_arr=0;
    for(let i =0; i <arr.length;i++){
        const element =arr[i]
        sum_of_arr += element;
        }
        let missingNumber = sum_of_natural_no-sum_of_arr
    ///LOGIC WILL GO HERE
    res.send( { data: missingNumber } );
    });
//=====================================================================================================================

//Q2.
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33,
//34, 35, 37, 38]: 36 is missing
// Your route code will look like this
router.get("/sol2", function (req, res) {
//logic : sum of n consecutive numbers is [ n * (first + last) / 2 ]..so get sum of all
//numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
let arr= [33, 34, 35, 37, 38]
let n = arr.length+1
let sum_of_natural_no = n*(33+38)/2
sum_of_arr=0;
for(let i =0; i <arr.length;i++){
    const element =arr[i]
    sum_of_arr = element;
    }
    let missingNumber = sum_of_natural_no-sum_of_arr


///LOGIC WILL GO HERE
res.send( { data: missingNumber } );
})




module.exports = router;