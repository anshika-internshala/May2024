function Foo() {}
Foo.prototype.value = 10;

const foo = new Foo();
foo.value = 20;

delete foo.value;

console.log(foo.value); 
