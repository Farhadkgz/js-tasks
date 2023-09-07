const form = document.getElementById('registration-form');
const base_url = 'http://51.250.97.89:8008';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validate()) {
        sendingData();
    }
})

async function getDirections() {
    const url = base_url + '/api/v1/direction/list';

    const response = await fetch(url);
    if (response.ok){
     const data = await response.json();
     
     console.log(data);
    }
     
}

async function sendingData() {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.date_of_birth = dateConvert(data.date_of_birth);

    const requestBody = JSON.stringify(data);

    const url = base_url + '/api/v1/student/append';
                

    const options = {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:requestBody
    }

    const response = await fetch(url, options);
    if (response.ok){

    }

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

function dateConvert(dateStrings) {
    if (dateStrings) {
        const date = new Date(dateStrings);
        
        let getYear = date.toLocaleString('default', {year: 'numeric'});
        let getMonth = date.toLocaleString('default', {month: '2-digit'});
        let getDay = date.toLocaleString('default', {day: '2-digit'});

        return getDay + '.' + getMonth + '.' + getYear;
    } else {
        return null;
    }
}

getDirections();
