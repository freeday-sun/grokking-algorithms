export default function binarySearchRecursively(list, item): number{
    if(list.length === 1) return list[0]

    let low = 0;
    let high = list.length - 1;
    let mid = Math.floor((low + high) / 2);

    if(mid > item) return binarySearchRecursively(list.slice(0, mid), item)
    else return binarySearchRecursively(list.slice(mid + 1), item)
}
