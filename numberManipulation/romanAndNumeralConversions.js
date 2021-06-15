// Given a number, convert the value to (string) roman numerals
// assume value is up to about 500

function convertToRoman(num) {
    var convertedRoman = "";
    var romanArr = ['i','iv','v','ix','x','xl','l','xc','c','cd','d'];
    var numeralArr = [1,4,5,9,10,40,50,90,100,400,500];

    for(var i=numeralArr.length-1; i>=0;i--){
        while(numeralArr[i]<=num){
            convertedRoman += romanArr[i];
            num -=numeralArr[i];
        }
    }
    console.log("the number converted to roman is: "+convertedRoman);
}

// Given a (string) roman numeral, convert the value to back to a number
// assume value is up to about 500

function convertBackToNumbers(str) {
    var convertedNumeral = 0;
    var romanArr = {'i':1,'v':5,'x':10,'l':50,'c':100,'d':500};
    for(var i=0; i<str.length; i++){
        // find whether a lesser roman is in front of higher one:
        var current = romanArr[str[i]];
        // console.log("current: "+current);
        var next = romanArr[str[i+1]];
        // console.log("next: "+next);/

        if(current<next && next!=undefined){
            convertedNumeral += (next-current)
            i++; 
        } else{
            convertedNumeral += current
        }
    }
    console.log("the roman converted to numeral becomes: "+convertedNumeral);
}

convertToRoman(457);
convertBackToNumbers('cdlvii');