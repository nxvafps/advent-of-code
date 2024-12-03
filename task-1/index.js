// PART 1
const input = require("./input.js");

const lines = input.trim().split("\n");

let leftList = [];
let rightList = [];
lines.forEach((line) => {
  const [left, right] = line.split(/\s+/).map(Number);
  leftList.push(left);
  rightList.push(right);
});

leftList.sort((a, b) => b - a);
rightList.sort((a, b) => b - a);

let list = leftList.map((value, index) => [value, rightList[index]]);

let diffs = list.map((pair) => Math.abs(pair[0] - pair[1]));
let totaldiff = diffs.reduce((sum, diff) => sum + diff, 0);

//console.log("Sorted lists:");
//list.forEach((pair) => console.log(pair[0], pair[1]));

//console.log(`Differences: ${diffs}`);

console.log(`Total difference: ${totaldiff}`);

// PART 2
let similarityScores = [];
leftList.forEach((value) => {
  let count = rightList.filter((rightValue) => rightValue === value).length;
  similarityScores.push(value * count);
});

let similarityScore = similarityScores.reduce((sum, score) => sum + score, 0);

console.log(`similarity score: ${similarityScore}`);
