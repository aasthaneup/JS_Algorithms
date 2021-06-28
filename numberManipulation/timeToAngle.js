//given a number of minutes past midnight, determine
//the angle between the hour and minute hands at that point in time
//keep in mind that on an analog clock, the hour hand is
//not perfectly aligned with the number hour
//e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5

//Ex: clockAngles(360) should return 180 (it is 6 o'clock)
//Ex: clockAngles(180) should return 90 (it is 3 o'clock)

function clockAngles(minutes) {
    // Your code here
    let angle = 0;
    let rem = minutes % 60
    let hrs = Math.floor(minutes / 60);

    // with % (for alternative understanding)
    // let percent = hrs*100/12
    // angle = (360*percent)/100
    
    // without %
    let percent = hrs/12
    angle = 360*percent

    if(rem != 0){
        // with % (for alternative understanding)
        // let tempPercent = rem*100/60;
        // angle = 360*tempPercent/100

        // without %
        let tempPercent = rem/60;
        angle = 360*tempPercent
        // console.log("Has some angle! Rem is: "+rem)
    }
    return angle
}
    console.log(clockAngles(360)+" degrees");
    console.log(clockAngles(180)+" degrees");
    console.log(clockAngles(45)+" degrees");
    console.log(clockAngles(46)+" degrees");