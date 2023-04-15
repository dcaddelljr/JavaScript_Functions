// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    if (count < 0){
        console.log(`${count} is less than 0.`);
        return;
    }
    
    for ( let i = 0; i <= count; i++){
        if (i % 2 != 0){
            console.log(i);
        }       
    }   
}
printOdds(15);

// Exercise 2 Section


console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    if (userName == null){
        console.log(`No userName entered`)
    }

    if (age <= 0 || age == null){
        console.log(`Incorrect age entered`)
    }

    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, you need to wait ntil you're sixteen.`;

    if (age >= 16){
        console.log(aboveSixteen)
    }
    else{
        console.log(belowSixteen)
    }
}

checkAge(`Dwight`, 5);
checkAge(`Ben`, 55);
checkAge(null, 25);
checkAge(`Dwight`, -5);

console.log("EXERCISE 3:\n==========\n");
function quadrant(x,y){
    if (x == 0 && y == 0){
        console.log(`(${x}, ${y}) is in the center`);
    }else if (x == 0){
        console.log(`(${x}, ${y}) is on the x-axis`);
    }else if (y == 0){
        console.log(`(${x}, ${y}) is on the y-axis`);
    }else if (x > 0 && y > 0){
        console.log(`(${x}, ${y}) is in Quadrant 1`);
    }else if (x < 0 && y > 0){
        console.log(`(${x}, ${y}) is in Quadrant 2`);
    }else if (x < 0 && y < 0){
        console.log(`(${x}, ${y}) is in Quadrant 3`);
    }else if (x > 0 && y < 0){
        console.log(`(${x}, ${y}) is in Quadrant 4`);
    }
}

quadrant (5, 6);
quadrant (-5, 8);
quadrant (-5, -8);
quadrant (5, -8);
quadrant (0, 8);
quadrant (5, 0);
quadrant (0, 0);

console.log("EXERCISE 4:\n==========\n");

function triangle(a, b, c){
    if (!(a + b > c) || !(a + b > c) || !(b + c > a)){
    console.log(`This is not a triangle`);
    return;
    } 
    
    if (a == b && a == c && b ==c){
        console.log(`This is an equilateral triangle`);
    } else if ( a == b || a == c || b == c);{
        console.log(`This is an isosceles triangle`);
    } 
        console.log(`Triangle is scalene.`);
}

console.log(`Triangle 1, 2, 2`);
triangle(1, 2, 2)
console.log();

console.log(`Triangle 2, 2, 2`);
triangle(2, 2, 2)
console.log();

console.log(`Triangle 1, 1, 2`);
triangle(1, 1, 2)
console.log();


console.log("EXERCISE 5:\n==========\n");
function dataPlan(planLimit, day, usage){

    let dailyUseLimit = (planLimit / 30).toFixed(2);
    let currentDailyUsage = (usage/ day).toFixed(2);
    let daysRemaining = 30 - day;
    let overage = ((30 * currentDailyUsage) - planLimit).toFixed(2);
    let dataRemaining = ((planLimit - currentDailyUsage) / daysRemaining).toFixed(2);

    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily usage: ${dailyUseLimit} GB/day`);

    if (currentDailyUsage > dailyUseLimit){
        console.log(`You are EXCEEDING your average daily use ${currentDailyUsage} 
        by continuing this high usage, you'll exceed your data plan by ${overage}GB.`);

        console.log(`To stay below your data plan, use no more than ${dataRemaining}GB/day.`);
    }
    
    else if ((currentDailyUsage < dailyUseLimit)){
        console.log(`You are UNDER your average daily use ${currentDailyUsage} 
        by continuing lowering this usage, you'll have excess in your data plan by ${overage * -1}GB.`);
        
        console.log(`To go above your data plan, use more than ${dataRemaining}GB/day.`);
    } 
    
    console.log(`You are BREAKING EVEN in your aveage daily use (${currentDailyUsage}GB/day. Continuing this usage, you'll
    have excess in your data plan by ${overage * -1}GB.`);

    console.log(`To stay below your data plan, use no more than ${dataRemaining}GB/day.`);
}

dataPlan (100, 15, 56); // OVER

dataPlan (100, 15, 50); // EVEN

dataPlan (100, 15, 40); // UNDER