/* 
1. Print odds 1-20
Using a loop write code that will console.log all of the odd values from 1 up to 20.

2. Decreasing Multiples of 3
Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

3. Print the sequence
Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

4. Sigma
Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

5. Factorial
Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
*/

/* pseudocode prep 
1. Print odds 1-20
Using a loop write code that will console.log all of the odd values from 1 up to 20.

number % 2 = 0 means the number is even, so number % 2 != 0 should mean it is odd
also, I am given the starting and ending numbers, I can just start at 1 (odd) and increment by 2
that will automatically increment through the odd numbers in the range
*/

//if known you are starting on an odd number
for (var i = 1; i <= 20; i+=2) {
    console.log(i);
}

//if not known you are starting on an odd number
function getOdds(start, end) {
    for (var i = start; i <= end; i++) {
        if (i % 2 != 0) { //if this is true, the number is odd
            console.log(i);
        }
    }
}

/* pseudocode prep 
2. Decreasing Multiples of 3
Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

% 3 = 0 will be useful
descending through the range, so loop will want to decrement
once again, given the range up front, so I will jsut do the loop with the known info
*/

for (var i = 100; i >= 0; i--) {
    if (i % 3 === 0) { //if this is true, the number is divisible by 3
        console.log(i);
    }
}

/* pseudocode prep 
3. Print the sequence
Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

I need to print values in a specific sequence
It makes sense to store those in an array and just iterate through the array

*/

var myArr = [4, 2.5, 1, -0.5, -2, -3.5];

for (var i=0; i < myArr.length; i++) { //this loops through the array from left to right
    console.log(i); //this prints each value of the array from left to right
}

/* pseudocode prep 
4. Sigma
Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

total all values of i as I loop through the range
*/
var sum = 0;
for (var i = 1; i <= 100; i++) { //starting at 1, not 0 because 1 is the first number in the range
    sum += i; //just keep adding i to sum
}

console.log(sum); //after the loop finishes, print the grand total of 5050

/* pseudocode prep 
5. Factorial
Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

same as #4, but multiply i by sum instead of add
*/

var product = 1 //setting product to starting value because i * 0 will produce 0 every time
for (i = 1; i <=12; i++) {
    product = product * i; //this loops through 1*1, 1*2, 2*3, etc
}

console.log(product); //print out the product of 479001600

