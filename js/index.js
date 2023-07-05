// Функція, яка запитує у користувача значення, доки воно не буде коректним або доки користувач не відмовиться надавати відповідь:
const promptUntilValid = (promptMessage) => {
  while (true) {
    const input = prompt(promptMessage);
    if (input === null) {
      alert("Жаль. Сподіваюсь ще побачитись.");
      return null;
    }
    if (!isNaN(Number(input)) && input !== '')
      return input;
  }
}

// Функція знаходження коренів квадратного рівняння:
const solveQuadraticEquation = (a, b, c) => {
  // Дискриминант обчислюэться за формулою b^2-4ac
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0)
    alert("D < 0. Рівняння не має рішень");
  else if (discriminant === 0) {
    /*
      x = -(b/(2*a)
    */
    const x = -b / (2 * a);
    alert("D = 0. Єдиний корінь рівняння: " + x);
  } else {
    /*
      x1 = (-b + √D)/2*a
      x2 = (-b - √D)/2*a
    */
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    alert("D > 0. Корені рівняння: " + x1 + ", " + x2);
  }
}

const quadraticEquationSolver = () => {
  let a = prompt("Будемо знаходити рішення квадратного рівняння виду: ax^2 + bx + c = 0\n Введіть a");
  if (a === null) {
    alert("Жаль. Сподіваюсь ще побачитись.");
    return
  }
  a = (!isNaN(Number(a)) && a !== '' && Number(a) !== 0  ) ? a : promptUntilValid("Введіть a");
  if (a === null)
    return;

  const b = promptUntilValid("Введіть b");
  if (b === null)
    return;

  const c = promptUntilValid("Введіть c");
  if (c === null)
    return;

  solveQuadraticEquation(a, b, c);
}

quadraticEquationSolver();
