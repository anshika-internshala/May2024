const parent = { name: 'parent', value: 1 };
const child = Object.create(parent);

// Creating child object with parent as prototype

console.log(child);
child.value = 2;

console.log(child.name); 
console.log(child.value); 
console.log(parent.value); 
