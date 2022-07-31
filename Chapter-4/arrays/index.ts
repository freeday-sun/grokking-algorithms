import findMax from "./findMaxRecursively";
import countItemsRecursively from "./countItemsRecursively";
import sumRecursively from "./sumItemsRecursively";
import binarySearchRecursively from "./binarySearchRecursively";


const sortedList = [1, 3, 5, 7, 9];

console.log(sumRecursively(sortedList)) // 25
console.log(countItemsRecursively(sortedList)) // 5
console.log(findMax(sortedList)) // 9
console.log(binarySearchRecursively(sortedList, 7)); // 3, O(log n) notation
