const question = document.querySelectorAll('.container');

question.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('active');
    })
})
