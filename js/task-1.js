
function slugify(title) {
  // Спочатку розбиваємо заголовок на слова
  let words = title.split(' ');

  // Приводимо всі слова до нижнього регістру і об'єднуємо їх тире
  let slug = words.join('-').toLowerCase();

  return slug;
}
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

