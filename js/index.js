function hw9(array) {
  function performOperations() {
    // Задання початкових значень змінних
    const result = {
      // 1. Знайти суму та кількість позитивних елементів.
      positiveSumAndCount: {
        sumPositive: 0,
        countPositive: 0
      },
      // '2. Мінімальний елемент масиву та його порядковий номер'
      minElementAndIndex: {
        minElement: array[0],
        index: 0
      },
      // '3. Максимальний елемент масиву та його порядковий номер'
      maxElementAndIndex: {
        maxElement: array[0],
        index: 0
      },
      // '4. Кількість негативних елементів'
      countNegative: 0,
      // '5. кількість непарних позитивних елементів'
      countOddPositive: 0,
      // '6. кількість парних позитивних елементів'
      countEvenPositive: 0,
      // '7. Суму непарних позитивних елементів':0,
      sumEvenPositive: 0,
      // '8. Суму парних позитивних елементів'
      sumOddPositive: 0,
      // '9. Добуток позитивних елементів'
      productPositive: BigInt(1)
    }

    for (let i = 0; i < array.length; i++) {
      const element = array[i];

      if (element > 0) {
        // 1. Знаходження суми та кількості позитивних елементів
        result.positiveSumAndCount.countPositive++;
        result.positiveSumAndCount.sumPositive += element;
        // 5. Знаходження кількості непарних позитивних елементів
        // 6. Знаходження кількості парних позитивних елементів
        element % 2 !== 0 ? (
          // 7. Знаходження суми парних позитивних елементів
          result.sumEvenPositive += element,
            result.countOddPositive++
        ) : (
          // 8. Знаходження суми непарних позитивних елементів
          result.sumOddPositive += element,
            result.countEvenPositive++
        )
        // 9. Знаходження добутку позитивних елементів
        result.productPositive *= BigInt(element);
      } else {
        // 4. Визначення кількості негативних елементів
        result.countNegative++;
      }

      // 2. Знаходження мінімального елемента та його порядкового номеру
      if (element < result.minElementAndIndex.minElement) {
        result.minElementAndIndex.minElement = element;
        result.minElementAndIndex.index = i;
      }

      // 3. Знаходження максимального елемента та його порядкового номеру
      if (element > result.maxElementAndIndex.maxElement) {
        result.maxElementAndIndex.maxElement = element;
        result.maxElementAndIndex.index = i;
      }
    }
    // Повернення результатів в об'єкті
    return result;
  }

  const outcome = performOperations();

  function nullification() {
    for (let i = 0; i < array.length; i++)
      if (i !== outcome.maxElementAndIndex.index && array[i] !== outcome.maxElementAndIndex.maxElement) array[i] = 0;
  }

  nullification()
  return [outcome, array]
}

// Приклад використання функції з вказаним масивом
const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
const result = hw9(array);
console.log(result);
