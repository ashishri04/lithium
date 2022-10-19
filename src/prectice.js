const express = require('express');
const router = express.Router();

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
app.get("/sol2", function (req, res) {
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
});