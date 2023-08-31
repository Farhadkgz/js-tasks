const form = document.getElementById('registration-form');
const errorMsg = document.querySelector('span.error');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validate()) {
        console.log('собираем объект');
    }
});

function validate() {
    const elems = document.querySelectorAll('[data-required]');
    let count = 0;

    elems.forEach((elem) => {
        const errorMsg = elem.nextElementSibling;

        if (!elem.value) {
            count++;
            elem.style.borderColor = 'red';

            if (errorMsg) {
                errorMsg.style.display = 'block';
            }
        } else {
            if (errorMsg) {
                errorMsg.style.display = 'none';
            }
        }
    });

    return count === 0;
}


