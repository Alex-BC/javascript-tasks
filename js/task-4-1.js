// Задача 4 - 1
// Callback функция
// Функция mapArray(array, cb), принимает 1 - м параметром array - массив чисел, а вторым параметром cb - функцию обратного вызова(callback).Функция mapArray создает новый массив numbers и заполняет его числами из массива array преобразованными функцией cb.

// Оформи создание массива numbers нужной длины используя new Array() и необходимый аргумент для задания длины, равной длине array.

// Напиши функцию обратного вызова addIndex, которая принимает два параметра - element и index и возвращает число - сумму element и index(сложение).

// Напиши функцию обратного вызова subIndex, которая принимает два параметра - element и index и возвращает число - разность element и index(вычитание).

// Write code under this line
const addIndex = (element, index) => element + index;
// Write code under this line
const subIndex = (element, index) => element - index;

function mapArray(array, cb) {
  'use strict';
  // Write code under this line
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
    numbers[i] = cb(element, index);
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5];

console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9]

console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1]

// Этапы
// Код должен содержать функцию addIndex
// Код должен содержать функцию mapArray
// Результатом вызова функции addIndex с аргументами 10 и 2 должно быть число 12
// Результатом вызова функции mapArray должен быть массив
// Результатом вызова функции mapArray должен быть пустой массив, если аргумент - пустой массив
// Результатом вызова mapArray для аргументов[-2, 0, 2] и addIndex будет массив[-2, 1, 4]
// Результатом вызова mapArray для аргументов[-2.5, 0, 2.5] и addIndex будет массив[-2.5, 1, 4.5]
// Результатом вызова mapArray для аргументов arr и addIndex будет массив[1, 3, 5, 7, 9]
// Результатом вызова mapArray для аргументов[-2, 0, 2] и subIndex будет массив[-2, -1, 0]
// Результатом вызова mapArray для аргументов[-2.5, 0, 2.5] и subIndex будет массив[-2.5, -1, .5]
// Результатом вызова mapArray для аргументов arr и subIndex будет массив[1, 1, 1, 1, 1]
// Массив 'numbers' должен создаваться с помощью функции - конструктора Array с аргументом - длиной массива 'array'
