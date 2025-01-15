/*
Create a function called startCounter that takes an integer n and a delay in milliseconds. 
The function should print integers starting from 1 up to n at each delay interval.

Requirements:
The function should use setInterval to print integers.
If n is less than 1, the function should immediately print "Invalid input".
*/
function startCounter(n, delay) {
    // Implement this function
    
    let counter = 1;

    // If n is less than 1, the function should immediately print "Invalid input".
    if (n < 1) {
        console.log("Invalid input")
    } else {
        console.log(counter);
        counter++;
        // setInterval repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
        const intervalId = setInterval(() => {
            if (counter > n) {
                clearInterval(intervalId)
            } else {
                console.log(counter);
                counter++;
            }
        }, delay)
    }

}
module.exports = startCounter;
