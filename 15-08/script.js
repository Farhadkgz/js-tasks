// 1)  Поменять местами дивы

const one = document.getElementById('one-div');
const two = document.getElementById('two-div');
const btn_click = document.getElementById('btn-click');

btn_click.addEventListener('click', function() {
    
  let text1 = one.outerHTML;
    let text2 = two.outerHTML;
    
    one.outerHTML = text2;
    two.outerHTML = text1;
  }); 

// ----------------------------------------------------------------------------------
// 2)  Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку выведите куда данная ссылка ссылается.
// (Читаем свойство href у элемента)

// Вариант1
const link_1 = document.getElementById('link1');
const link_2 = document.getElementById('link2');
const link_3 = document.getElementById('link3');

const configLink1 = () => {
    confirm('Ссылка ведет на главную страницу компаний Megacom');
}

const configLink2 = () => {
  confirm('Для перехода на главную страницу mBank, нажмите на ссылку');
}

const configLink3 = () => {
  confirm('Биржа криптовалют BTC, ETH, LTC, DOGE, SOL, XRP, XLM, E.T.C....');
}

link_1.addEventListener('mouseenter', configLink1);
link_2.addEventListener('mouseenter', configLink2);
link_3.addEventListener('mouseenter', configLink3);

// ----------------------------------------------------------------------------------

// Вариант2
const links = document.querySelectorAll('a');

const showLinkDest = (event) => {
    const link = event.target;
    const destination = link.getAttribute('href');
    alert('Ссылка ведет на ' + destination);
};

links.forEach(link => {
    link.addEventListener('mouseenter', showLinkDest);
}); 

// ----------------------------------------------------------------------------------
// 3) Напишите функцию, которая объединяет несколько строк и возвращает их.
// Используйте глобальный массив arguments.

function string() {
    let result = '';

    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

console.log(string('Привет, ', 'как ', 'дела?'));
