export default function quickSortRecursively(arr) {
    if (arr.length < 2) return arr

    let pivot = arr[0]
    const lessThanPivot = arr.filter(el => el < pivot)
    const moreThanPivot = arr.filter(el => el > pivot)

    return quickSortRecursively(lessThanPivot).concat(pivot).concat(quickSortRecursively(moreThanPivot))
}

