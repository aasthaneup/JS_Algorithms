// GIVEN A STRING, RETURN THE REVERSE OF THAT STRING
// "abcdefg" ===> return "gfedcba"
function reverseString(string){
    var revString = "";
    for(var i = string.length-1; i>=0; i--){
        var currentLetter = string[i];
        revString = revString+currentLetter;
    }
    return revString;
}
console.log(reverseString("abcdefg")); 

// ALTERNATE SOLUTION:
function reverseStr(str){
    var letterArr = str.split('');
    for(let i = 0; i < Math.floor(letterArr.length/2); i++){
        var temp = letterArr[i]
        letterArr[i] = letterArr[letterArr.length-1-i]
        letterArr[letterArr.length-1-i] = temp
    }
    console.log(letterArr.join(''))
}
reverseStr("abcdefg")

// GIVEN A STRING, RETURN THE ACRONYM OF THAT STRING
// GIVEN "LIVE FROM SATURDAY NIGHT LIVE"
// RETURN "LFSNL"
function acronym(string){
    var acr = "";
    acr= acr+string[0];
    for(var j = 1; j< string.length-1;j++){
        if(string[j] == " "){
            acr = acr+(string[j+1]);
        }
    }
    acr = acr.toUpperCase();
    return acr;
}
console.log(acronym("live from saturday night live"));

// ALTERNATE SOLUTION:
function acro(string){
    var list = string.split(" ")
    var returnString = ""
    for(let i = 0 ; i < list.length ; i++){
        returnString += list[i][0].toUpperCase();
    }
    console.log(returnString);
}
acro("live from saturday night live")
