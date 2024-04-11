// Задание 1 - Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?
// Массивы в JavaScript считаются "неправильными" в том смысле, что они являются гибридными структурами данных, объединяющими в себе особенности различных типов структур данных. Это происходит из-за того, что массивы в JavaScript реализованы на основе объектов, а не на основе традиционных массивов, как в других языках программирования.
// Основные структуры данных, с которыми массивы в JavaScript совмещаются, включают в себя:
// Последовательности: Массивы в JavaScript являются упорядоченными коллекциями элементов, где каждый элемент имеет свой индекс. Это подобно структуре данных "последовательность" или "список" в других языках программирования.
// Хэшированные таблицы: Каждый индекс массива в JavaScript на самом деле является строковым ключом, который используется для доступа к значению. Это позволяет массивам иметь не только числовые индексы, но и строковые ключи, что делает их похожими на хэшированные таблицы.
// Динамические структуры данных: Массивы в JavaScript могут динамически изменять свой размер, добавляя или удаляя элементы. Это делает их похожими на динамические структуры данных, такие как динамический массив или связанный список.
// Задание 2 - Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)
function logger() {
  console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };
const loggerBind = logger.bind(obj);
loggerBind();
logger.call(obj);
logger.apply(obj);
// Задание 3.1 Массивы:- Создайте массив чисел и найдите его сумму, - Создайте массив строк и объедините их в одну строку, - Найдите максимальный и минимальный элементы в массиве чисел.
const numbers = [1, 5, 7, 8, 11, 76, 54, 89, 90];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
const max = Math.max(...numbers);
const min = Math.min(...numbers);
const strings = ["Hello", "Maria", "and", "Ben"];
const result = strings.join(" ");
// Задание 3.2-Stack (стек): - Реализуйте стек с использованием массива.
class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    this.stack.pop();
  }
  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + " ";
    }
    return str;
  }
}
const stack = new Stack();
// Задание - 3.3 Queue (очередь):- Реализуйте очередь с использованием массива,- Имитируйте работу очереди на примере ожидания на кассе.
class Queue {
  constructor() {
    this.queue = [];
  }
  push(item) {
    this.queue.push(item);
  }
  shift() {
    this.queue.shift();
  }
  printStack() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + " ";
    }
    return str;
  }
}
const array = new Queue();
// Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()
Function.prototype.bind = function (context) {
  const fn = this;
  return function (...args) {
    return fn.apply(context, args);
  };
};
