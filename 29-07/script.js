// 1) На старте вы получаете массив. Необходимо написать функцию, 
// которая будет возвращать массив удвоенных значений исходного массива.

// Вариант1
let array = [5, 2, 8, 9, 4, 1, 3];
let number = array.map(function(value){
    return value * 2;
})

console.log(number);

// Вариант2
let array2 = [3, 5, 2, 9, 7, 4, 8];
let number2 = array2.map(value => value * 2)

console.log(number2);

// -----------------------------------------------------------------------------
// 2) Напишите функцию, которая заполняет новый массив предоставленным значением 
//    и затем ее возвращает. Функция должна первым параметром принимать 
//    элемент (значение для массива), вторым параметром размер массива.  
//    Например: myFunc('a', 3)   // ['a', 'a', 'a']

// Вариант1
function getFunc(element, amount) {
    const newArray = [];
    
    for (let i = 0; i < amount; i++) {
    newArray.push(element);
    }
    
    return newArray;
    }
    
    console.log(getFunc('a', 3)); // ['a', 'a', 'a']


// Вариант2
function getFunc2(element2, amount2) {
    const newArray2 = new Array(amount2).fill(element2);
    return newArray2;
  }
  
  console.log(getFunc2('a', 3)); // ['a', 'a', 'a']

// -----------------------------------------------------------------------------
// 3) Напишите функцию, которая принимает 2 числа и возвращает 1, 
//    если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.
//    Попробуйте реализовать эту функцию не только с помощью if...else, 
//    но и с помощью тернарного оператора, и в виде стрелочной функции.

// Вариант1
function sum(number, number2){
    if(number > number2){
        return 1;
    } else if(number < number2){
        return -1;
    } else{
        return 0;
    }
}

console.log(sum(2, 1));


// Вариант2
function sum2(a, b){
    return a > b ? 1 : a < b ? -1 : 0;
}

console.log(sum2(1, 5));

// ----------------------------------------------------------------------------------------

// Самостоятельная работа

const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Madrid",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      }
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618"
        }
      }
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "Madrid",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653"
        }
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990"
        }
      }
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342"
        }
      }
    }
  ]

  const filtered = users.filter(user => {
    return user.address.city === "Madrid";
    });
    
    console.log(filtered);

// --------------------------------------------------------------------------------------------------------------



