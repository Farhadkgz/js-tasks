const who = prompt('Кто пришел?');

if(who === 'Админ'){
    const password = prompt('Пароль?');
    if(password === 'Черный Властелин'){
        alert('Добро пожаловать');
    } else if(password === null){
        alert('Вход отменен');
    } else {
        alert('Пароль неверен');
    }
} else if(who === null){
    alert('Вход отменен');
} else {
    alert('Я вас незнаю');
}



 
