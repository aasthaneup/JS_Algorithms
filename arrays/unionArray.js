//Union sorted arrays
// Given two arrays, create a union of the two. If you encounter duplicates, only include the greatest number of duplicates from one array. (Ex, if array1 has four 4's and array2 has two 4's, the result array should only have four 4's, NOT 6)
// Ex: given [1,2,2,3,4] and [1,2,5,7] return [1,2,2,3,4,5,7] 
// Ex: given [2,3,4,4,6] and [1,2,4,4,4,4,7] return [1,2,3,4,4,4,4,6,7] 

const unionArray = (arr1, arr2) => {
    var arr3 = [];
    var i1 = 0;
    var i2 = 0;
    while(i1 < arr1.length || i2 < arr2.length) {
        if (arr1[i1] == arr2[i2]) {
            arr3.push(arr1[i1++]);
            i2++;
        }
        else if (i2 >= arr2.length || arr1[i1] < arr2[i2])
            arr3.push(arr1[i1++]);
        else
            arr3.push(arr2[i2++])
    }
    return arr3;
}
console.log(unionArray([1,2,2,3,4],[1,2,5,7]))
console.log(unionArray([2,3,4,4,6] , [1,2,4,4,4,4,7]))