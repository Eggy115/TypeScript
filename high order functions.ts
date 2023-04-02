function multiplyBy(factor: number): (value: number) => number {
    return (value: number) => value * factor;
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));
console.log(triple(5));
