export default function findMax(arr) {
    if (arr.length === 0) return 0;

    let firstEl = arr[0];
    let newArr = arr.slice(1);
    return Math.max(firstEl, findMax(newArr));
};

