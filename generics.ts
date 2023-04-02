function identity<T>(arg: T): T {
    return arg;
}

let str = identity("hello");
let num = identity(5);

console.log(str);
console.log(num);
