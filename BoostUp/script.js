const forms = document.querySelector('#form-reg');

const getFormValue1 = (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const values = Object.fromEntries(formData.entries());

    console.log(values);
};

forms.addEventListener('submit', getFormValue1);

// ------------------------------------------------------------------------

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validateForm();
});

function validateForm() {
    inputs.forEach(function (input) {
        if (input.value == "") {
            input.style.borderColor = 'red';
            const errorMessage = document.createElement('span');
            errorMessage.innerText = 'Поле не должно быть пустым';
            errorMessage.style.color = 'red';
            input.parentNode.appendChild(errorMessage);
        } else {
            input.style.borderColor = 'green';
            
        }
    });
}
