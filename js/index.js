const program = () => {
  const pow = (num, degree) => {
    if (degree === 0) return 1;
    return degree < 0 ? 1 / pow(num, -degree) : num * pow(num, degree - 1);
  }

  const result = pow(Number(prompt('Число, яке треба піднести до ступеню:')), Number(prompt('Ступінь:')));
  document.write(`Результат: ${result}`);
}
program()
