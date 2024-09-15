//Part 1: Growing Pains
//The area in which the plants are contained is circular, with a radius of 5 meters.
//The formula for calculating the area of a circle is PI multiplied by the radius, squared:const PI = 3.1415;const area = PI * radius * radius;
//Each plant requires a minimum space of 0.8 square meters.
//The area is starting with 20 plants.
//The plants double in number every week.

const PI = 3.1415;
let radius = 5;
const area = PI * radius * radius;
let space_for_a_plant = 0.8;
let numOfPlants = 20;

let eightyPercent = area * 80 / 100;
let fiftyPercent = area * 50 / 100;

let numOfWeeks = 1;
let totalPlants = numOfPlants * 2 ** (numOfWeeks - 1);
totalAreaReq = totalPlants * 0.8;

console.log(`Maximum capacity: ${eightyPercent}sqft
Moderate capacity: ${fiftyPercent}sqft`)

console.log(`--- Week 1 ---`);
if (totalAreaReq > eightyPercent) {
    console.log(`Pruned, stop plants from exceeding the capacity of the garden.
Total Plants: ${totalPlants}
Total Area Required: ${totalAreaReq}sqft`)
} else if (totalAreaReq < eightyPercent && totalAreaReq >= fiftyPercent) {
    console.log(`Monitored, plants are growing at an acceptable rate.
Total Plants: ${totalPlants}
Total Area Required: ${totalAreaReq}sqft`)
} else {
    console.log(`Planted, there is room to plant more plants.
Total Plants: ${totalPlants}
Total Area Required: ${totalAreaReq}sqft`)
}

console.log(`--- Week 2 ---`);
numOfWeeks += 1;
totalPlants = numOfPlants * 2 ** (numOfWeeks - 1);
totalAreaReq = totalPlants * 0.8;
if (totalAreaReq > eightyPercent) {
    console.log(`Pruned, stop plants from exceeding the capacity of the garden. 
Total Plants: ${totalPlants}
Total Area Required: ${totalAreaReq}sqft`)
} else if (totalAreaReq < eightyPercent && totalAreaReq >= fiftyPercent) {
    console.log(`Monitored, plants are growing at an acceptable rate. 
Total Plants: ${totalPlants} 
Total Area Required: ${totalAreaReq}sqft`)
} else {
    console.log(`Planted, there is room to plant more plants. 
Total Plants: ${totalPlants}
Total Area Required: ${totalAreaReq}sqft`)
}

console.log(`--- Week 3 ---`);
numOfWeeks += 1;
totalPlants = numOfPlants * 2 ** (numOfWeeks - 1);
totalAreaReq = totalPlants * 0.8;
if (totalAreaReq > eightyPercent) {
    console.log(`Pruned, stop planting from exceeding the capacity of the garden. 
Total Plants: ${totalPlants} 
Total Area Required: ${totalAreaReq}sqft `)
} else if (totalAreaReq < eightyPercent && totalAreaReq >= fiftyPercent) {
    console.log(`Monitored, plants are growing at an acceptable rate.
Total Plants: ${totalPlants} 
Total Area Required: ${totalAreaReq}sqft`)
} else {
    console.log(`Planted, there is room to plant more plants.
Total Plants: ${totalPlants} 
Total Area Required: ${totalAreaReq}sqft`)
}

//part-2-----------
console.log(`                                    `)
console.log(`Part-2`)
console.log(`*************`)
numOfPlants = 100;
numOfWeeks = 10;
totalPlants = numOfPlants * 2 ** (numOfWeeks - 1);
totalAreaReq = totalPlants * 0.8;
console.log(`The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks : ${totalAreaReq}sqft
Starting with 100 as initial count & counting week-1 as week-0, by the end of 10 weeks total number of plants: ${totalPlants} plants.
Total required area: ${space_for_a_plant}*${totalPlants} = ${totalAreaReq}sqft`);


//part-3------------
console.log(`                             `)
console.log(`Part 3`)
console.log(`***************`);
numOfPlants = 100;
totalAreaReq = totalPlants * 0.8;
try {
    if (totalAreaReq > eightyPercent) {
        throw "Error - `Plants exceeds 80% of the area available";
    }
} catch (error) {
    console.log(`Pruned, stop plants from exceeding the capacity of the garden. Total area occupied exceeds the "Total available area".`);
}







