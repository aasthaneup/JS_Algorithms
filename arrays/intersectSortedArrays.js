//Intersect sorted arrays
// Given two arrays of sorted numbers, return a new array that contains only the numbers that are in both arrays - do NOT count duplicates
// Ex: given [1,2,2,3,4,5] and [2,4,6,7,8] return [2,4]
// Ex: given [1,1,1,2,3,4] and [1,1,3,4,5] return [1,3,4]

// short method using includes function
const intersectSortedArr = (arr1, arr2) => {
    let intArr = [];
    for (let i = 0; i<arr1.length; i++){
        if(arr2.includes(arr1[i]) && !intArr.includes(arr1[i])){
            intArr.push(arr1[i])
            // console.log("pushed "+arr1[i]+" into intArr")
        }
        // console.log("intArr till now: "+intArr)
    }
    return intArr;
}

// without using includes or other inbuilt functions:
const inserctingSortedArrays = (arr1, arr2) => {
    let intArr = [];
    let inc = false;
    for (let i = 0; i<arr1.length; i++){
        for(let j = 0;j<arr2.length; j++){
            // console.log(`arr1 i is ${i} and its value is ${arr1[i]}`)
            // console.log(`arr2 j is ${j} and its value is ${arr2[j]}`)
            if(arr2[j]<=arr1[i]){
                if(arr1[i]==arr2[j]){
                    // console.log("equal")
                    for(let k = 0;k<intArr.length;k++){
                        // console.log(" int arr k is "+k+" and its value is "+intArr[k])
                        if(arr1[i]==intArr[k]){
                            // console.log("found "+arr1[i]+" in intArr")
                            inc = true;
                            // console.log("inc is "+inc)
                            break;
                        }
                    }
                    // console.log("inc is: "
                    // +inc)
                    if(!inc){
                        intArr.push(arr1[i])
                        // console.log("pushed into intArr: "+arr1[i])
                    }
                }
                // console.log("int arr till now: "+intArr);
            }
        }
        inc = false;
    }
    return intArr;
}
console.log(inserctingSortedArrays([1,2,2,3,4,5] , [2,4,6,7,8]))
console.log(inserctingSortedArrays([1,1,1,2,3,4] , [1,1,3,4,5]))
console.log(intersectSortedArr([1,2,2,3,4,5] , [2,4,6,7,8]))
console.log(intersectSortedArr([1,1,1,2,3,4] , [1,1,3,4,5]))