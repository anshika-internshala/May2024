const users = [
    {
        firstName:"Anshika",
        lastName: "Agarwal",
        age: 56
    },
    {
        firstName: "Arti",
        lastName: "Agarwal",
        age: 34
    },
    {
        firstName: "Kunal",
        lastName: "Agarwal",
        age: 12
    },
    {
        firstName: "Ankit",
        lastName: "Agarwal",
        age: 2
    }

];

// Print firstNames of all users whose age is less than 20

const filteredUsers = users.filter(user => user.age < 20);

console.log(filteredUsers);

const usersArray = filteredUsers.map(user => user.firstName);
console.log(usersArray);

const result = users.filter(user => user.age < 20).map(user => user.firstName);

const numbers = [ 23, 11, 45 ,233 ];
numbers.sort((a, b) => a - b);

// [ 11, 23, 45, 233]
// []

console.log(numbers);




