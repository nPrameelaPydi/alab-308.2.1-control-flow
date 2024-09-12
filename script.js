//Part 1: Growing Pains
//The area in which the plants are contained is circular, with a radius of 5 meters.
//The formula for calculating the area of a circle is PI multiplied by the radius, squared:const PI = 3.1415;const area = PI * radius * radius;
//Each plant requires a minimum space of 0.8 square meters.
//The area is starting with 20 plants.
//The plants double in number every week.

const PI = 3.1415;
let radius = 5
const area = PI * radius * radius;
let minSpace_for_aPlant = 0.8;
let numOfPlants = 20;
let speedOfGrowth = 2;
maxPlants = (area / minSpace_for_aPlant);
console.log(maxPlants);
let numOfWeeks = 1;

let eightyPercent = area * 80 / 100;

let fiftyPercent = area * 50 / 100;
let totalPlants = numOfPlants;
totalarea = totalPlants * 0.8;


numOfWeeks = 1;
console.log(`Number of weeks: ${numOfWeeks}`);
if (numOfWeeks <= 1) {
    console.log("Planted. There is room to plant more plants.");
}

numOfWeeks = 2;
console.log(`Number of weeks: ${numOfWeeks}`);
totalPlants = numOfPlants * Math.pow(2, (numOfWeeks - 1));
totalarea = totalPlants * 0.8;
if (totalarea >= eightyPercent) {
    console.log("Prune. Growth exceeds 80% of max capacity.");
} else if (eightyPercent < totalarea <= fiftyPercent) {
    console.log("Monitored. Growth is at an acceptable rate.");
} else {
    console.log("Planted. There is room to plant more plants.");
}

numOfWeeks = 3;
console.log(`Number of weeks: ${numOfWeeks}`);
totalPlants = numOfPlants * Math.pow(2, (numOfWeeks - 1));
totalarea = totalPlants * 0.8;
if (totalarea >= eightyPercent) {
    console.log("Prune. Growth exceeds 80% of max capacity.");
} else if (eightyPercent < totalarea <= fiftyPercent) {
    console.log("Monitored. Growth is at an acceptable rate.");
} else {
    console.log("Planted. There is room to plant more plants.");
}













//console.log(totalarea);

//totalarea = numOfPlants *Math.pow(speedOfGrowth, numOfWeeks) *0.8

//20 * 8 * 0.8








//console.log(`Number of weeks: ${numOfWeeks}`);



//numOfWeeks = 2;
//console.log(`Number of weeks: ${numOfWeeks}`);

//if ((totalNumOfPlants * 80 / 100) >= maxPlants) {
//    console.log("Prune. Growth exceeds 80% of max capacity");
//} else if (maxPlants < (totalNumOfPlants * 80 / 100) && maxPlants >= (totalNumOfPlants * 50 / 100)) {
//    console.log("Monitored. Growth is at an acceptable rate");
//} else if (maxPlants < (totalNumOfPlants * 50 / 100)) {
//    console.log("Planted. There is room to plant more plants.");
//}



