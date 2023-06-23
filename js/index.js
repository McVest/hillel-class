const num1 = parseFloat(prompt("Введіть перше число:"));

const num2 = parseFloat(prompt("Введіть друге число:"));

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
const message =
`${num1} + ${num2} = ${sum}
${num1} - ${num2} = ${difference}
${num1} * ${num2} = ${product}
${num1} / ${num2} = ${quotient}`;

alert(message);
