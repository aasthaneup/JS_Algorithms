//  String Rotation
// Given a string and a number, rotate a string by that number
// Ex: Given RotateString("Hello World",3) return "rldHello Wo"
// Ex: Given RotateString("Rotated",4) return "atedRot"

const rotateString = (str, num) => {
    var arrTemp = [];
    let x = 1;
    while (x<=num){
        // console.log("pushing: "+str[str.length-1])
        arrTemp.push(str[str.length-1]);
        str = str.slice(0,-1);
        // console.log("str now: "+str)
        x++;
    }
    // console.log("arr is: "+arrTemp);
    // console.log("str is: "+str);

    let st = "";
    while(arrTemp.length !=0){
        st += arrTemp.pop()
        // console.log("st is: "+st)
    }
    str = st+str;
    return str;
}

//  Is Rotation
// Conversely, given a string and a possibly rotated string, return true or false whether the second string is a rotation of the first
// Ex: given isRotation("Hello World", "rldHello Wo"), return true
// Ex: given isRotation("Hello", "World"), return false

const isRotation = (str1, str2) => {
    var rotn = false;
    if(str1.length != str2.length){
        console.log("Is not a rotation because the lengths of the two strings is not equal!")
        return false;
    }
    for(let i = 1; i<=str1.length;i++){
        if(!rotn){
            let rotatedStr = rotateString(str1, i)
            rotatedStr == str2 ? rotn = true : rotn = false;
            // console.log("rotated str is: "+rotatedStr);
            // console.log("rot is: "+rotn);
        }
        else{
            return true;
        }
    }
    return rotn;
}

console.log("===========Rotate the String=============")
console.log(rotateString("Hello World", 3));
console.log("----------------------------")
console.log(rotateString("Rotated", 4));
console.log("============Is Rotation?============")
console.log(isRotation("Hello World", "rldHello Wo"));
console.log("----------------------------")
console.log(isRotation("Hello", "World"));
console.log("----------------------------")
console.log(isRotation("Hello", "loHel"));
console.log("----------------------------")
console.log(isRotation("Hello", "loH"));