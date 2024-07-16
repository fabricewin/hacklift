function greet(name:string){
    return "Hello, I'm " + name;
}

// console.log("Bonjour ", greet("Tony") );

// sum(4,5)

export function addition(a:number, b:number, c:number){
    return a + b +c;
}
console.log("This is the sum of 4 and 5: ", addition(4,5,6));

// multiplication: a function for the multiplication of 3 numbers, it takes 3 arguments
// and returns the product of the 3
// une fonction qui prend 3 nombres en arguments et fait leur produit
//division: create a function that takes two arguments a and b and returns a divided by b
//creer une fonction qui prend 2 arguments a et b et calcule la division de a par b

// DRY => Don't Repeat Yourself
// Linting

// hoisting

// Arrow Functions

const addNumbers = (a:number, b:number, c:number) => a + b + c;

// console.log(addition(5, 10, 7))
// console.log(addNumbers(5, 10, 7));

// const getGrade = (score: number) => {
//     if (score < 40) {
//         return "Mediocre"
//     }

//     if (score < 50) {
//         return "Insuffisant"
//     }

//     if (score < 60) {
//         return "Passable"
//     }

//     if (score < 70) {
//         return "AB"
//     }

//     if (score < 80) {
//         return "B"
//     }

//     if (score < 90) {
//         return "Tres Bien"
//     }

//     return "Excellent"
// };

// console.log(getGrade(5));
// console.log(getGrade(91));

// Repeat the getGrade function:
// 1. Create a file in hacklift directory, name it get-grade.ts
// 2. Create getGrade function using the arrow function method (also, use switch instead of if)
// 3. Export the getGrade function
// 4. Create another file in hacklift, name it grade.ts
// 5. Import the getGrade function in grade.ts and demonstrate how to print students grades using the function.
// 6. Commit the code and push to Github

