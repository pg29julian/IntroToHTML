
function functionName(name) // Function
{
    return "Hello" + name;
}

const multiply = function (num1, num2) // Function expression
{
    return num1 * num2;
}

console.log(multiply(2, 4));

const divide = (num1, num2) => num / num2; // Arrow function

console.log(divide(3, 4));

let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);

let mixedArrays = ["apple", 5, true, "orange"];

console.log(mixedArrays[-1]);

fruits.push("melon");
console.log(fruits)

fruits.pop();
console.log(fruits);

fruits.shift("melon");
console.log(fruits);

fruits.unshift("melon");
cocnsole.log(fruits);

let userInfo =
{
    name: "Julian",
    age: 22,
    address: {
        street: "Georgia St",
        country: "Canada"
    }
};

console.log(userInfo["name"]);
console.log(userInfo.name);

userInfo.height = 174;
userInfo.height = 200;
delete userInfo.height;

let score = 80;
if (score < 80) {
    console.log("Hello");
}
else if (score > 90) {
    console.log("Hola");
}
else {
    console.log("Score is betweem 80 and 90");
};

let name = "James";

switch (name) {
    case "James":
        console.log("You are James");
        break;
    case "Jimmy":
        console.log("You are not James");
        break;
    default:
        console.log("You are not James nor Jimmy");
};

for (let i = 0; i < 10; i++) {
    console.log(i);
};

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
};

let otherCount = 0;
while (true) {
    console.log(otherCount);
    if (otherCount >= 5) break;
};