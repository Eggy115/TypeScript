interface Person {
    name: string;
    age: number;
}

function sayHello(person: Person) {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

const john: Person = { name: "John", age: 25 };
sayHello(john);
