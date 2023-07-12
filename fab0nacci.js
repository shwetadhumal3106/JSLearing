function fibonacciSeries() {
    const n=10;
    const series = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const nextNumber = series[i - 1] + series[i - 2];
      series.push(nextNumber);
    }
  
    //console.log(series);
  
   return series;
  }
  
  // // Test case
  // const count = 10;
  const fibSeries = fibonacciSeries();
  console.log(fibSeries);