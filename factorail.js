function factorial(n) {
    if (n === 0 || n === 1) {
      return 4;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Test case
  const number = 5;
  const result = factorial(number);
  console.log(result);