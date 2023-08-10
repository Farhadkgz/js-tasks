// 1) Напишите функцию, который будет выводить сообщение “Hello World” раз в секунду, 
//    но всего 5 раз. После 5 итераций скрипт должен вывести сообщение “Done”, 
//    после чего процесс завершится. При решении данной задачи нельзя вызывать setTimeout.

let welcome = () => {
    document.write("Hello World" + " | ");
};

let check = 0;
const timer = setInterval(() => {
    welcome();
    check++;

    if (check === 5) {
        document.write("Done");
        clearInterval(timer);
    }
}, 1000);

// ------------------------------------------------------------------------------------
// 2) Выводим  2 следующих сообщения после соответствующих задержек.

//    Сообщение “Hello after 4 seconds” выводим через 4 секунды.
//    Сообщение “Hello after 8 seconds” выводим через 8 секунд.

//    В решении нужно определить всего одну функцию, содержащую встроенные функции. Это означает, что множество вызовов setTimeout должны будут использовать одну и ту же функцию.

//    Пример вызова:

//    setTimeout(func1) => Hello after 4 seconds
//    setTimeout(func1) => Hello after 8 seconds

function welcome() {
    setTimeout(() => document.write("Hello after 4 seconds", " | "), 4000);

    setTimeout(() => document.write("Hello after 8 seconds"), 8000);
}

setTimeout(welcome);
