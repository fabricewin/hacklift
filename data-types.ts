// STRING
const a = "I";
const b = "am";
const c = "happy";
const abc = a+" "+b+" "+c;
const abc2 = `${a} ${b} ${c}`
console.log(abc)
console.log(abc2)

// NUMBER
// - INTEGER
// - FLOAT

const num = 5;
const num2 = 9;

const sum = num + num2;
const product = num * num2;
const quotient = num2 / num;
const sqr = num ** 2; // num * num
const pwr3 = num ** 3; // num * num * num
const root2 = num2 ** (1/2); // square root of num2

console.log("-------------RESULTS----------------")
console.log({
    sum,
    product,
    quotient,
    sqr,
    pwr3,
    root2
})


// ARRAY (an ITTERABLE)
const arr = [2, 2, 2, 2, "Obinna", "Nigeria", [9, "ten", [78]]];
const shoppingListMen = ["boxers", "singlets", "data", "ties", "pants", "shoes", "mummy's shoes"];
const shoppingListLadies = ["bags", "ear rings", "shoes", "perfume", "make-up box"];

// how do we access items in an array?
console.log("-----------Accessing Array---------------");
console.log(shoppingListLadies[0]);
console.log(shoppingListMen[2]);

const perf = shoppingListLadies[3]
console.log(perf)

// length of array
console.log(shoppingListLadies.length);
console.log(shoppingListMen.length);



// SET
// Set is a kind "array" with unique items
const unique_items = new Set([4, 4, 6, 8,2, 2, 2, 2])
console.log({unique_items})
// Set is sometimes used for deduping 



// DICTIONARY (OBJECT)
// key-value pairs
// we create dictionaries using a curly brace

console.log("-------------------DICTIONARY------------------------")
const contact_details = {
    firstName: "Fabrice",
    lastName: "Obinna",
    email: "fabio@gmail.com",
    phoneNo: "+229-43674532",
    address: "C/482 Jericho, Cotonou",
    country: "Benin",
}


 console.log(contact_details.email); // contact_details["email"]
 console.log(contact_details["phoneNo"]); // contact_details.phoneNo