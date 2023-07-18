const myName = 'Nicolas';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 12);

class Person {
  constructor(private age: number, private name: string) {}

  getSumary() {
    return `My name is ${this.name}, ${this.age} `;
  }
}

const dexter = new Person(myAge, myName);
dexter.getSumary();
