// Bubble Sort:

function bubbleSort(arr){
    var len = arr.length;
    while(len>1){
        for(var i = 0; i<len;i++){
            if(arr[i]>arr[i+1]){
                var temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp;
            }
        }
        len -= 1;
    }
    return(arr);
}

// Selection Sort:

function selectionSort(arr){
    var min = 0;
    var begin = 0;
    while(begin< arr.length){
        for(var i = begin; i< arr.length; i++){
            if(arr[i]< arr[min]){
                min= i;
            }
        }
        if(arr[min] != arr[begin]){
            var temp = arr[begin];
            arr[begin] = arr[min];
            arr[min] = temp;
        }
        begin +=1;
        min = begin;
    }
    return arr;
}
console.log("===============")
console.log("Bubble sort -->")
console.log("===============")
console.log(bubbleSort([5,2,1,8,9,7,3,0,-1,15,4]));
console.log("==================")
console.log("Selection sort -->")
console.log("==================")
console.log(selectionSort([4,2,6,9,1,5,8,0,-1,3]));