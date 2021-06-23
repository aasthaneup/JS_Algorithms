
// /Insertion Sort
// Given an array of numbers, sort the numbers by placing values into their correct position at the front (sorted part) of the array
// Ex:
// [9,5,2,7,1] -> [5,9,2,7,1] -> [2,5,9,7,1] -> [2,5,7,9,1] -> [1,2,5,7,9]

function insertSort(arr){
    var sortedArr = [];
    var tempArr = [];
    sortedArr.push(arr[0]);

    for(let i = 0; i<arr.length-1; i++){
        // console.log("i = "+i)
        if(arr[i+1]>sortedArr[sortedArr.length-1]){
            sortedArr.push(arr[i+1])
            // console.log("Just regular push")
        }else{
            for(var j=0;j<sortedArr.length;j++){
                // console.log("pop")
                var smaller = sortedArr.length-1;
                // console.log("smaller= "+sortedArr[smaller])
                while(sortedArr[smaller]>arr[i+1] && sortedArr[smaller]!=undefined){
                    // console.log("smaller= "+smaller+" and value= "+sortedArr[smaller])
                    // console.log("arr[i+1]= "+arr[i+1])
                    tempArr.push(sortedArr[smaller]);
                    sortedArr.pop();
                    smaller -=1;
                }
            }
            // console.log("pushed "+arr[i+1])
            sortedArr.push(arr[i+1]);
            while(tempArr.length!=0){
                // console.log("temp arr size: "+tempArr.length)
                sortedArr.push(tempArr[tempArr.length-1]);
                var t = tempArr.pop();
                // console.log("popped from temp arr: "+t)
            }        
        }
            // console.log("sorted array till now: "+sortedArr)
    }
    return sortedArr;
}

console.log(insertSort([9,5,2,7,1]));
console.log(insertSort([9,5,-1,7,18,1]));