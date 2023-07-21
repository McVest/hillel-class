const program = () => {
  function createSumFunction() {
    let sum = 0;
    return function (num) {
      return sum += num;
    };
  }

  const sum = createSumFunction();

  console.log(sum(3));
  console.log(sum(5));
  console.log(sum(20));
}
program();
