const forms = document.querySelector('#form-reg');



forms.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validate()){
        sendingData();
    };
});

async function sendingData(){
    const formData = new FormData(forms);
    const data = Object.fromEntries(formData.entries());
    data.date_of_birth = '09.09.2023';
    const requestBody = JSON.stringify(data);

    const url = 'http://51.250.97.89:8008/api/v1/student/append';

    const options = {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:requestBody
    }

    const response = await fetch(url, options)
    console.log(response);
}


function validate() {
    const elems = document.querySelectorAll('[data-required]');
    let count = 0;

    elems.forEach((elem) => {
       
        if (!elem.value) {
            count++;
            elem.style.borderColor = 'red';
        }
    })

    return count === 0;
}
