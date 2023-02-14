class Student {
  constructor(name, id, age) {
    this.name = name;
    this.id = id;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

let obj1 = new Student("Pallab", 18192103050, 22);
console.log(obj1.getName());

obj1.setName("Pallab Majumdar");
console.log(obj1.getName());
