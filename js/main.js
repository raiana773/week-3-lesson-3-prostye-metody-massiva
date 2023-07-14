// ! простые методы массивов
// ! PUSH- добовляет элементы в конце массива
// let arr = ['elem1', 'elem2']
// arr.push("elem-3", "elem-4")
// console.log(arr);


// ! UNSHIFT-добовляет элемент в конце
// let arr = ['elem1', 'elem2']
// arr.unshift("elem0", 'elem-1')
// console.log(arr);

// ! POP- удаляет с конца массива и возвращяет удаленный элемент
// let arr = ["elem-1", "elem-2"];
// let deletedElem=arr.pop()
// console.log(arr);
// console.log(deletedElem);


// ! SHIFT -удаляет с начала массива и возвращяяет удаленный элемент
// let arr = ['elem-1', 'elem-2']
// let deletedElem = arr.shift()
// console.log(arr);
// console.log(deletedElem);


// ! SPLICE - удаляет элементы начиная с указанного индекса (первый аргумент), 
// ! вторым аргументом передаем количество удаляемых элементов, третим аргументом 
// ! (необязательные аргументы) и далее принимает элементы на которые нужно заменить удаленные
// let arr = ['elem-1', 'elem-2', 'elem-3', 'elem-4'];
// let deletedElements = arr.splice(1, 2, "hello", 'hello', 'hello')
// console.log(arr);
// console.log(deletedElements);

// ! SLICE- копирует массив с указанного индекса до указанного индексаб исходный массив не меняутся
// let arr = ['elem-1', 'elem-2', 'elem-3', 'elem-4'];
// let copyOfArr = arr.slice(0, 2);
// console.log(copyOfArr);


// ! JOIN- может сделать из массива строку и принимает в аргументы "соединитель", 
// ! если передадим пустую строку значит разделителя нет, исходный массив не меняет
// let arr = ['elem-1', 'elem-2', 'elem-3', 'elem-4'];
// let str =arr.join(' ')
// console.log(str);


// ! SPLIT - может из строки сделать массив и принимает в аргументы "разделитель", 
// ! если передадим пустую строку разделить по одному символу, исходную строку не меняет
// let str = ' hello world';
// let newArr = str.split(" ")
// console.log(newArr);

// ! REVERSE-переворачивает массив
// let arr = ['a', 'b', 'c']
// arr.reverse()
// console.log(arr);


// ! INCLUDES-проверяет есть ли в массиве указанный элемент
// let students = ['jack', 'nick', 'alex']
// let isInArray = students.includes("alex");
// console.log(students.includes("alex"));
// console.log(isInArray);

// ! CONCAT- может оъединять несколько массивов в один
// let arr1 = [1,  2, 3];
// let arr2 = [4, 5, 6];
// let mergedArrays = arr1.concat(arr2, [7, 8, 9])
// console.log(mergedArrays);

// ! SORT - при сортировке меняет исходный массив, если не передать аргументы, 
// ! то сортирует в лексикографическом порядка
// let nums = [215, 1561, 314, 1, 11, 15, 2, 22];
// nums.sort();

// ? сортировка по возрастанию
// nums.sort((a,b) => a - b)
// console.log(nums);

// ? сортировка по убывынию
// nums.sort((a,b) => b - a)
// console.log(nums);

// ? сортировка по длине элементов
// let arr = ['qe', 'qerqr', 'q', 'qeqrrrwqweqqeweww'];
// arr.sort((a, b) => a. length- b. length)
// console.log(arr);

// ? сортировка по алфвавиту
// let arr2 = ['b', 'c', 'a']
// console.log(arr2.sort());

// ! SPREAD operator-копирует, распределяет
// ? поверхностное копирование


// ? array
// let arr1 = [1, 2, 3]
// console.log(arr1);
// console.log(...arr1);
// let arr2 = [...arr1]
// console.log(arr2);

// ? objects
// let obj1 = {
//     name: "Aziret",
//     age: 21
// }
// console.log(obj1);
// let obj2 = { ...obj1 }
// console.log(obj2);


// let nums = [13324, 7454, 24, 4, 75, 12, 3435, 2]
// let max = Math.max(...nums)
// let min = Math.min(...nums)
// console.log(max);
// console.log(min);

// let str = 'hello';
// console.log(str.toUpperCase())
// console.log(str[0].toUpperCase() + str.substring(1));
// console.log(str.substring(1, 2));

// let str1= 'HELLO';
// console.log((str1.toLowerCase()));


// /////////////////////////////////////////////
// let str = 'hello world';
// console.log(str);
// console.log(str.split(" ").reverse().join(" "));
