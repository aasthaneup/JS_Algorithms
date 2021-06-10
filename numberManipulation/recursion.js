// a sigma is the SUM up to a number
// sigma(5) = 1 + 2 + 3 + 4 + 5 = 25
function sigma(num) {
    if(num <= 0) {
        return 0;
    } else {
        return num + sum(num - 1)
    }
}
console.log("sigma");
console.log(sigma(5));
// a factorial is a the PRODUCT up to a number
// sigma(5) = 1 * 2 * 3 * 4 * 5 = 120
function factorial(num) {
    // your code here
    if(num <=1){
        return 1;
    }
    else{
        return num * factorial(num-1)
    }
}
console.log("factorial");
console.log(factorial(6));

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// notice any pattern in the numbers above?
function fibonacci(num) {
    if(num<=1){
        return num;
    }
    else{
        return fibonacci(num-1)+ fibonacci(num-2)
    }
}
console.log("fibonacci");
console.log(fibonacci(7));