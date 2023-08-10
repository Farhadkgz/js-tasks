// 1) Напишите функцию при вызове которой начинается обратный отсчёт от 10 до 1 с интервалом в 1 секунду.
// Когда отсчёт достигнет 1, должно появиться сообщение "Время истекло!".
function counter() {
    let count = 10;

    const time = setInterval(() => {
        console.log(count);
        count--;

        if (count === 0) {
            clearInterval(time);
            console.log("Время истекло!");
        }
    }, 1000);
}

counter();

// -------------------------------------------------------
// 2) Создайте функцию, которая будет принимать объект и
//    разделит в отдельный массив все свойства и их значения.
   
//    Например:
//    const user = {name:'Bon', age: 14}
//    myFunc(user) => ['name', 'age'], ['Bon', 14]

// counter(); 

let myFunc = (object) => {
    const a = Object.keys(object);
    const b = Object.values(object);

    console.log(a, b);
};

const user = { name: "Bon", age: 14 };
myFunc(user);

