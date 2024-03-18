/*

Phase 1 -> Appendix
Created March 17, 2024
by Sakib Rasul

Objectives
1. Learn about the following advanced programming concepts:
   - First-class citizens
   - Compilation and execution
   - Algorithmic complexity

2. Learn about the following advanced JavaScript concepts:
   - Immediate invocation
   - Context
   - Array methods
   
Takeaways
- When faced with a problem, (a) understand its objectives and edge cases, (b) write some solution,
       and then (c) work towards case coverage and optimal time and space complexity.
- Hold onto `map` and `filter` for Phase 2!

*/

// ~ First-Class Citizens
// A **first-class** object or **citizen** is one that has every capability a language has to offer.
// In JavaScript, functions are first-class citizens.

// ~ Compilation and Execution
// During **compilation**, JavaScript allocates memory for your code, and understands its scope(s).
// During **execution**, JavaScript runs your code line-by-line, stores values in variables, and executes functions.

// ~ Algorithms in Time and Space
/*part of a techniqual interviews
measure of efficiency
*/
// An **algorithm** is a set of instructions that, when run, accomplish some task.
// **Big O notation** is a way of quantifying how "good" an algorithm is.
// By "good", we mean fast (no. of small operations) and/or small (amount of memory taken up by operations).
// Big O describes this "goodness" as a factor of n, the algorithm's input size.
// Common big O descriptions include:
// - O(1): **constant** speed or memory
// - O(log n): **logarithmic** speed or memory
// - O(n): **linear** speed or memory
// - O(n^2): **quadratic** speed or memory
// - O(n^2), O(n^3), etc.: **exponential** speed or memory

// ~ Immediate Invocation
console.log("~~IMMEDIATE INVOCATION~~");
// We can immediately invoke functions upon declaration with (definition)(arguments).
console.log(((a, b) => a + b) (4, 5));
// ~ Context
console.log("~~CONTEXT~~");
// -> A function's **context** is an object it can access with the keyword `this`.
function greet(end) {console.log("Hi, " + this.name + end)};
// -> We can use the function methods `apply`, `call`, and `bind` to define a function's context.
// -> function.apply(this, [arguments]);
//    executes `function` with an object reference and array of arguments.
greet.apply({name: "Margarita"}, ["."]);
// -> function.call(this, ...arguments);
//    executes `function` with an object reference and list of arguments.
greet.call({ name: "Maria"}, "!");
// -> function.bind(this, ...arguments);
//    returns a function with an object reference and array of arguments.
const greetAlejandro = greet.bind({ name: "Alejandro" }, "?");
greetAlejandro();


// ~ Advanced Array Methods
console.log("~~ADVANCED ARRAY METHODS~~");
// `forEach` isn't the only array method out there. Let's learn about a few more!

// Hint: For the purposes of Phase 2, `filter` and `map` are most relevant.
const prices = [10, 50, 20, 100];
// -> array.find() returns the first element that satisfies some condition.Like querySlector(query selecting somthing from the array).
const firstHighPrice = prices.find(price => price > 25);
console.log(firstHighPrice);
// -> array.reduce() accumulates a value by applying a function to each element in an array.
//prices.reduce((accumulator, element))
// 1. sum = 0, price = prices[0] = 10, sum = sum + price = 0 + 10.
// 2. sum = 10, price = price[1] = 50, sum = sum + price = 10 + 50 = 60
// 3. ..., sum = 60 + 20 = 80
// 4. ..., sum = 80 + 100 = 180
const sumOfPrices = prices.reduce((sum, price) => sum + price);
console.log(sumOfPrices);
/* This is very important for phase 2 ... the bellow */
// -> array.filter() returns an array with only the elements that satisfy some condition.
// none of these modify the original array
const lowPrices = prices.filter(price => price < 50);
console.log(lowPrices);
// -> array.map() returns an array where each element has been transformed in some specified way.
const doublePrices = prices.map(price => price * 2);
console.log(doublePrices);
// ~ Challenges
// 1. Write a function that takes an array of sentences and returns only the questions in the list.
const phrases = ["hello, there!", "how are you?", "It's me!"];
const findTheQuestion = phrases.filter(phrase => phrase.includes("?"));
console.log(findTheQuestion);
// const findTheQuestion = phrases.filter(phrase => phrase === "?");
// console.log(findTheQuestion);
// 2. Write a function that takes an array of lowercased sentences and returns them capitalized.
// const lowerCasePhrase = phrases.map(phrase => phrase.toLowerCase);
// console.log(lowerCasePhrase)

const lowerCasePhrase = phrases.map(phrase => phrase.slice(0,1).toUpperCase() + phrase.slice(1));
console.log(lowerCasePhrase)



 // example array for #1 and #2