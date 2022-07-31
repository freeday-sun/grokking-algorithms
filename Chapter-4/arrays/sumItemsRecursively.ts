export default function sumRecursively(arr): number{
    if(arr.length === 1) return 1

    return  arr.shift() + sumRecursively(arr)
}

