// Задание 1 – Создать объект counter всеми возможными способами;
const counter = { id: 1, name: "counter", value: 5 };
class Counters {
  constructor(id, name, value) {
    this.id = id;
    this.name = name;
    this.value = value;
  }
}
const counter1 = new Counters(2, "counter2", 7);
const counterPrototype = { id: 3, name: "counter3", value: 9 };
const counter2 = Object.create(counterPrototype);
const counter3 = Object.assign({}, { id: 4, name: "counter4", value: 11 });
// Задание 2 – Скопировать объект counter всеми возможными способами;
const counterCopy1 = Object.assign({}, counter);
const counterCopy2 = { ...counter };
const counterCopy3 = JSON.parse(JSON.stringify(counter));
const counterCopy4 = {};
for (let key in counter) {
  counterCopy4[key] = counter[key];
}
const counterCopy5 = Object.create(
  Object.getPrototypeOf(counter),
  Object.getOwnPropertyDescriptors(counter)
);
// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
const count = 0;
function makeCounter() {
  count++;
  return count;
}
const makeCounter = function () {
  count++;
  return count;
};
const makeCounter = () => {
  count++;
  return count;
};
// Задание 4 - прочитать и описать работу глобальной функции structuredClone()

// Функция structuredClone() представляет собой метод, который используется для создания глубокой копии объекта или массива с сохранением их структуры и всех вложенных объектов или массивов. Этот метод является частью интерфейса StructuredCloneUtils, который доступен в среде исполнения JavaScript.
// Основная цель structuredClone() состоит в том, чтобы предоставить способ создания копии объекта или массива, которая полностью независима от оригинала. При копировании объекта или массива с помощью structuredClone(), все его свойства или элементы также будут скопированы, а не переданы по ссылке, как это может происходить при простом присваивании.
// Важно отметить, что structuredClone() обеспечивает глубокое копирование объектов, что означает, что все вложенные объекты или массивы также будут скопированы. Это гарантирует, что изменения, внесенные в скопированный объект или массив, не повлияют на оригинал.
// Однако следует помнить, что structuredClone() имеет некоторые ограничения:
// Он не может копировать некоторые типы данных, такие как функции, промисы, объекты WeakMap и WeakSet, и некоторые другие.
// Некоторые браузеры могут иметь ограничения на копирование определенных типов объектов, особенно если они содержат циклические ссылки или специфичные для браузера объекты.
// Тем не менее, при правильном использовании structuredClone(), он предоставляет удобный способ создания копии сложных структур данных в JavaScript.
// // Бонус
// Задание 1 –Написать функцию глубокого сравнения двух объектов:
const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
const obj2 = { here: { is: "on", other: "2" }, object: "Y" };
const deepEqual = (obj1, obj2) => {
    // Проверяем, что оба аргумента являются объектами
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
      return obj1 === obj2; // Если аргументы не объекты, просто сравниваем их значения
    }
    // Получаем ключи обоих объектов
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    // Если количество ключей разное, объекты точно не равны
    if (keys1.length !== keys2.length) {
      return false;
    }
   // Перебираем все ключи объекта 1
    for (let key of keys1) {
      // Если ключ из объекта 1 отсутствует в объекте 2, они не равны
      if (!keys2.includes(key)) {
        return false;
      }
   // Рекурсивно сравниваем значения ключей объектов
      if (!deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  
    // Если все ключи и их значения совпадают, объекты равны
    return true;
  };
  console.log(deepEqual(obj1, obj2)); // Выведет false, так как значения отличаются

//   Задание 2 –Развернуть строку в обратном направлении при помощи методов массивов:
  function reverseStr(str) {
  
    const reversedStr = str.split('').reverse().join('');
    return reversedStr;
  }
  
  // Пример использования
  const originalStr = "hello";
  console.log(reverseStr(originalStr)); // Выведет "olleh"