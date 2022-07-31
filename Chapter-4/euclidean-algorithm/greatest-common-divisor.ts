export default function greatestCommonDivisor(number1: number, number2: number) : number {
    if (number1 === number2) return number1;

    let max = Math.max(number1, number2);
    let min = Math.min(number1, number2);

    let remainder = max % min;

    while (remainder) {
        max = remainder;
        if (max < min) [min, max] = [max, min];
        remainder = max % min;
    }

    return min;
}

