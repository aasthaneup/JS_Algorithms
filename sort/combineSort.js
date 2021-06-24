// Combine arrays
// ---------------
// Given two arrays that are sorted, combine them into one sorted array
// Ex: 
// var sort1 = [2,4,6,8,10]; var sort2 = [1,3,9,11,13]; Should return -> [1,2,3,4,6,8,9,10,11,13]

function combineArrays(arr, arr2){

    var sortArr = [];
    var i = 0;
    var j = 0;
    while(sortArr.length<(arr.length+arr2.length)){
        if(arr[i]<arr2[j]){
            sortArr.push(arr[i]);
            i++;
        }
        else{
            sortArr.push(arr2[j]);
            j++
        }
    }
    return sortArr;
}

console.log(combineArrays([2,4,6,8,10], [1,3,9,11,13]))