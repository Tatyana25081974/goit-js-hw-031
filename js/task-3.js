
function filterArray(numbers, value) {
  // Створюємо порожній масив, у який будемо додавати підходящі числа
  const result = [];
  
  // Використовуємо цикл для ітерації кожного елемента масиву numbers
  for (let i = 0; i < numbers.length; i++) {
    // Якщо поточне число більше за value, додаємо його до result
    if (numbers[i] > value) {
      result.push(numbers[i]);
    }
  }
  
  // Повертаємо  свій новий масив з підходящими числами як результат.
  return result;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]