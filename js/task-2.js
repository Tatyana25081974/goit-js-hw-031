
function makeArray(firstArray, secondArray, maxLength) {
  // Створюємо комбінований масив для зберігання елементів 
  const combinedArray = [];

  // Додаємо елементи з першого масиву
  for (let i = 0; i < firstArray.length; i++) {
    combinedArray.push(firstArray[i]);
    // Якщо кількість елементів досягла maxLength, припиняємо додавати
    if (combinedArray.length >= maxLength) {
      return combinedArray;
    }
  }

  // Додаємо елементи з другого масиву
  for (let i = 0; i < secondArray.length; i++) {
    combinedArray.push(secondArray[i]);
    // Якщо кількість елементів досягла maxLength, припиняємо додавати
    if (combinedArray.length >= maxLength) {
      return combinedArray;
    }
  }

  //  повертаємо весь комбінований масив
  return combinedArray;
}
console.log(makeArray([1, 2, 3], [4, 5, 6], 5)); // [1, 2, 3, 4, 5]
console.log(makeArray([1, 2], [3, 4], 10)); // [1, 2, 3, 4]
console.log(makeArray([1, 2, 3], [4, 5, 6], 3)); // [1, 2, 3]
console.log(makeArray([], [4, 5, 6], 5)); // [4, 5, 6]
console.log(makeArray([1, 2, 3], [], 2)); // [1, 2]