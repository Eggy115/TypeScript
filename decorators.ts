function log(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments ${args}`);
        const result = originalMethod.apply(this, args);
        console.log(`Returned value: ${result}`);
        return result;
    };
    return descriptor;
}

class Calculator {
    @log
    add(x: number, y: number) {
        return x + y;
    }
}

const calc = new Calculator();
calc.add(2, 3);
