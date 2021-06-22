// Given an array comprised of numbers that  is potentially very long, return the maximum sum of values from a aubarray. Any consecutive seuqence of indices in the array is considered a subarray. Create a function that returns the highest sum possible from these subarrays, and prints the subarray.

// [1,2,-4,3,-2,3,-1] return 4 and print [3,-2,3]

function maxOfSubarray(arr) {
    // your code here
    var totalMax = arr[0];
    var maxNow = 0;
    var newArray = [];
    for(var i = 0; i< arr.length; i++){
        maxNow += arr[i];
        newArray.push(arr[i]);
        if(totalMax < maxNow){
            totalMax = maxNow;
        }
        if(maxNow <0){
            maxNow = 0;
            newArray = [];
        }
    }
    console.log("The max subarray is: "+newArray)
    return totalMax;
}

console.log(maxOfSubarray([1,2,-4,3,-2,3,-1])); //return 4; prints [3,-2,3]