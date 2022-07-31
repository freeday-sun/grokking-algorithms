export default function countItemsRecursively(arr): number{
    if(arr.length === 1) return 1
    arr.pop();

    return  1 + countItemsRecursively(arr)
}

