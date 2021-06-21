// Flatten a given array, eliminating nested and empty arrays. Do not alter the array; return a new one retaining the order. 
// Example #1) [1, [2,3], 4, []] ==> return a new array [1,2,3,4]

// **Assume that all elements are either numbers or arrays

function flatten(arr) {
    var newArr = [];
    for (var i = 0; i< arr.length; i++){
        if(arr[i].length != 0 && arr[i]!=undefined && arr[i][1]==undefined){
        newArr.push(arr[i])
        }
        else{
            for(var j = 0; j<=arr[i].length; j++){
                if(arr[i].length != 0 && arr[i][j] != undefined){
                newArr.push(arr[i][j]);
                }
            }
        }   
    }
    return newArr;
}

// ALTERNATE SOLUTION:

function falttenArray(arr){
    var newArr = [];
    for (var item of arr){
        if (typeof(item) == "number"){
            newArr[newArr.length] = item;
        }
        else if (Array.isArray(item)){
            for (var val of item){
                newArr[newArr.length] = val;
            }
        }
    }
    return newArr;

}

console.log("Solution 1")
console.log(flatten([1, [2,3], 4, []]))
console.log("Solution 2")
console.log(falttenArray([1, [2,3], 4, []]))
