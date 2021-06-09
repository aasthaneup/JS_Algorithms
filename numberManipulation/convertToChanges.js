// GIVEN A DOLLAR AMOUNT (4.32 FOR EXAMPLE) DETERMINE THE CHANGE BREAKDOWN
// 4.32 == 17 QUARTERS, 1 NICKEL, 2 PENNIES
// IT SHOULD ACCOUNT FOR THE LARGEST DENOMINATIONS FIRST
// CAN RETURN IN ANY FORMAT FOR THIS ONE (STRING, LIST, DICT) JUST MAKE SURE YOU IDENTIFY WHICH COINS!

function coinChange(amount){
    var centamount = (Math.floor(amount)*100)+(Math.round((amount%1)*100));
    console.log("$"+ amount+" is equal to "+centamount+" cents.");
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    var remainder = 0;
    quarters = Math.floor(centamount/25);
    remainder = centamount % 25;
    dimes = Math.floor(remainder/10);
    remainder = remainder % 10;
    nickels = Math.floor(remainder/5);
    remainder = remainder % 5;
    pennies = remainder;
    if(quarters!=0){
        console.log("quarters: "+quarters)
    }
    if(dimes !=0){
        console.log("dimes: "+dimes)
    }
    if(nickels !=0){
        console.log("nickels: "+nickels)
    }
    if(pennies !=0){
        console.log("pennies: "+pennies)
    }

    // ALTERNATE SOLUTION:

    // coinObj = {
    //     'quarter' : 0,
    //     'dime' : 0,
    //     'nickel' : 0,
    //     'penny' : 0
    // }
    // var num = amount * 100
    // console.log(num)
    // coinObj['quarter'] = Math.floor(num / 25)
    // num = num % 25
    // coinObj['dime'] = Math.floor(num / 10)
    // num = num % 10
    // coinObj['nickel'] = Math.floor(num / 5)
    // num = num % 5
    // coinObj['penny'] = num
    // console.log(coinObj)

}
coinChange(4.32);
coinChange(3.21);
coinChange(0.29);
coinChange(0.30);
