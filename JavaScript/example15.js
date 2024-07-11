const obj = {};
Object.defineProperty(obj, 'prop', {
  value: 42,
  enumerable: false
});

console.log(Object.keys(obj)); // ?
console.log(obj.prop); // ?
