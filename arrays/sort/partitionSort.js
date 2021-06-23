//Array Partition
// Given an array of unsorted numbers and a pivot index, sort the array so that all values less than the value at the pivot index are on the left of the value and all values greater than the pivot value are on the right
// Ex: 
// Given var sortArr = [7,9,1,6,2,10,8,4,3] and a pivot index of 3, return [1,2,4,3,6,9,7,10,8]
// Notice how the pivot index of 3 lands on the value of 6 originally and then sorts all numbers in the array around being less than or greater than the number 6
// It is OKAY for the pivot to move, just keep track of the original VALUE of the pivot
// Starter code:

function partition(arr, pivot){
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>arr[pivot] && i<pivot){
            // console.log("pivot is: "+pivot+" and value is: "+arr[pivot])
            var temp = arr[i];
            let j = i
            // shifts to the left
            while(j<pivot){
                arr[j]=arr[j+1];
                j++;
            }
            arr[pivot] = temp;
            pivot -=1;
            // console.log("array after loop: "+i+": "+arr);
            i--
            continue;
        }
        else if(arr[i]<arr[pivot] && i>pivot){
            // console.log("pivot is: "+pivot+" and value is: "+arr[pivot])
            var temp = arr[i];
            let j = i
            // shifts to the right
            while(j>pivot){
                arr[j]=arr[j-1];
                j--;
            }
            arr[pivot] = temp;
            pivot +=1;
            // console.log("array after loop: "+i+": "+arr);
            continue;
        }
        // console.log("array after loop: "+i+": "+arr);

    }
    return arr;
}


// ALTERNATE SOLUTION:
// ---------------------

function partitionSort(arr, pivot){
    // keep track of the value
    var piv = arr[pivot];
    // keep track of the pivot location
    var marker = pivot;
    for(let i = 0; i < arr.length; i++){
        // If the number encountered is larger than piv value and on the left...
        if(arr[i] > piv && i < marker){
            // Keep track of that larger value
            var larger = arr[i];
            for(let j = i; j <= marker; j++){
                // shift values to the left till we pass the marker, creating a gap to the right of the marker
                arr[j] = arr[j+1];
            }
            // the empty spot should now be where the marker was, so drop the larger value in
            arr[marker] = larger;
            // decrement because the true marker is one back
            marker--;
            // decrement i because i is still back where that larger # WAS and we need to check the number that is now there
            i--;
        }
        // can't simplify this to an else because there are plenty of other conditions that could otherwise make this run, but basically check for the opposite scenario
        if(arr[i] <= piv && i > marker){
            var smaller = arr[i];
            for(let k = i; k >= marker; k--){
                // Shift values to the right to make space for the smaller number
                arr[k] = arr[k-1];
            }
            // Put it there
            arr[marker] = smaller;
            // increment marker
            marker++;
            // Don't need to increment i because it should have the next value in it now
        }
    }
    return arr;
}

console.log(partition([7,9,1,6,2,10,8,4,3], 3));
console.log("==================================")
console.log(partition([3,2,7,4,9,1,6], 3))
console.log("==================================")
console.log(partitionSort([7,9,1,6,2,10,8,4,3], 3));
console.log("==================================")
console.log(partitionSort([3,2,7,4,9,1,6], 3))
console.log("==================================")