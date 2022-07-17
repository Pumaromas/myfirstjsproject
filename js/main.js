class Person {
	constructor (name, age, isMarried) {
		this.userName = name;
		this.age = age;
		this.isMarried = isMarried;
	}
}

const person1 = new Person('Mark', 30, false);
const person2 = new Person('Alex', 28, true);
console.log(person1);
console.log(person2);