import binarySearch from "./binary-search";
import simpleSearch from "./simple-search";

const sortedList = [1, 3, 5, 7, 9];

console.log(binarySearch(sortedList, 7)); // 3 O(log n) notation
console.log(simpleSearch(sortedList, 7)); // O(n) notation
