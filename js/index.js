function program() {
  function getNumericValue(queryString, titleString = '') {

    let isFirstRequest = true,
      value;
    do {
      // якщо titleString не пустий він буде відображатися
      value = prompt(((isFirstRequest && titleString) ? titleString + '\n' : '') + queryString);
      // перемикаємо флаг щоб повторно не показувати titleString
      isFirstRequest = false;
    } while ((!value || isNaN(value)) && value !== null);

    return value === null ? value : +value;
  }

  function squareEquation(a, b, c, invalidCallback) {
    if (a === 0) {
      // перевырта що в invalidCallback прийшла функцыя та виклик її
      if (typeof invalidCallback === 'function') invalidCallback();
      return null;
    }
    // Дискрімінант
    const d = b * b - 4 * a * c;
    if (d < 0) {
      return {
        d: d,
        x1: null,
        x2: null
      };
    } else {
      const sqrtD = Math.sqrt(d),
        x1 = (-b + sqrtD) / (2 * a),
        x2 = (d === 0) ? x1 : (-b - sqrtD) / (2 * a);

      return {
        d: d,
        x1: x1,
        x2: x2
      };
    }
  }
  // Користувач нажа Скасувати
  function goFromApp() {
    alert('Жаль. Сподіваюсь ще побачитись');
  }

  const a = getNumericValue('Введить a.', 'Будемо знаходить рішення квадратного рівняння виду: ax^2 + bx + c = 0');
  if (a === null) return goFromApp();

  const b = getNumericValue(`a=${a}\nВведить b`, '');
  if (b === null) return goFromApp();

  const c = getNumericValue(`a=${a},b=${b}\nВведить c`, '');
  if (c === null) return goFromApp();

  const result = squareEquation(a, b, c, () => alert('a = 0. Рівняння не має рішень'));
  if (result === null) return null;

  if (result.d < 0) {
    alert('D < 0. Рівняння не має рішень');
    return;
  }

  alert(result.d === 0 ? `D = 0. Єдиний корень рівняння: ${result.x1}` : `D > 0. Корені рівняння: ${result.x1}, ${result.x2}`)
}


program();
