// Matrix Search

// Jenny digs image and wants to make a JavaScript imaging library like PIL for python. She is given 2 different two-dimensional arrays, containing integers between 0 and 65535. Each two dimensional array represents a grey-scale image, where each integer value is a pixel. The second image might be somewhere inside the larger one. Return whether it is.
// Given Array: [ [12, 34, 45, 56],    And Array: [ [67, 78],      return: true
//                [98, 87, 76, 65],                 [43, 32] ];   
//                [56, 67, 78, 89],
//                [54, 43, 32, 21] ];

function matrixSearch(array, subArray) {
    for(let i=0; i< subArray.length; i++){
        for(let j=0; j<subArray[i].length; j++){
            if(subArray[i][j] == array[0][0] && subArray[i][j+1] == array[0][1]){
                if(subArray[i+1][j] == array[1][0] && subArray[i+1][j+1] == array[1][1]){
                    return ('found at index: ' + i +', '+ j);
                }
            }
        }
    }
    return "Unsuccessful matrix search: not found"
}

var array = [ [12, 34, 45, 56], [98, 87, 76, 65], [56, 67, 78, 89], [54, 43, 32, 21] ];
var subArray = [[67, 78], [43, 32]];

console.log(matrixSearch([ [56, 67],[54, 43] ],
    [[12, 34, 45, 56],
    [98, 87, 76, 65],                   
    [56, 67, 78, 89],
    [54, 43, 32, 21] 
]));
console.log(matrixSearch(array, subArray));