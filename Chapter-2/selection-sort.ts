 // 1. Finds the smallest value in an array
function findSmallestIndex(array) {
    let smallestElement = array[0]; // Stores the smallest value
    let smallestIndex = 0; // Stores the index of the smallest value

    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestElement) {
            smallestElement = array[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

 // 2. Sort the array
 // Selection Sort - O (n x n)
 // Parameter:
 //  1. random array
export default function selectionSort(array) {
     let sortedArray = [];
     let length = array.length;

     for (let i = 0; i < length; i++) {
         // Finds the smallest element in the array
         let smallestIndex = findSmallestIndex(array);
         // Adds the smallest element to new array
         sortedArray.push(array.splice(smallestIndex, 1)[0]);
     }

     return sortedArray;
 }

