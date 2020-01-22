//command line arguments in process.argv
let myArgs = process.argv.slice(2);
console.log(`x=${myArgs[0]}  y=${myArgs[1]}`);

//Calculate Euclidean distance
let distance=Math.sqrt(myArgs[0]*myArgs[0]+myArgs[1]*myArgs[1]);
console.log(`Euclidean Distance = ${distance.toFixed(2)}`);