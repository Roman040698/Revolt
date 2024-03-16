// Helper function to generate a random integer within a given range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(number) {
    return !isEven(number);
  }
  
  // Helper function to calculate the factorial of a number
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Example usage of helper functions
  const randomNumber = getRandomInt(1, 100);
  console.log("Random number:", randomNumber);
  
  console.log(randomNumber, "is even?", isEven(randomNumber));
  console.log(randomNumber, "is odd?", isOdd(randomNumber));
  
  const numToCalculateFactorial = 5;
  console.log("Factorial of", numToCalculateFactorial, "is", factorial(numToCalculateFactorial));