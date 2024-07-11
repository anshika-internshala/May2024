function Foo() {}
Foo.prototype.bar = 42;

const foo1 = new Foo();
const foo2 = new Foo();

foo1.bar = 100;

console.log(foo1.bar); // 100
console.log(foo2.bar);  // 42
console.log(Foo.prototype.bar);  //42
