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

console.log(rotateString("Hello World", 3));
console.log("========================")
console.log(rotateString("Rotated", 4));
