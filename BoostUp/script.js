/*

const btn = document.querySelector('#save-btn');
const form = document.querySelector('form');
const result = {};

btn.addEventListener("click", () => {
const elements = form.elements;

Array.from(elements).forEach((e) => {
const name = e.name;
const value = e.value;

result[name] = value;
});

console.log(result);
}); 

*/


const form = document.querySelector('#form-reg');

const reload = (event) => {
    event.preventDefault();

    const elements = form.elements;
    const result = {};

    for(let i = 0; i < elements.length; i++){
        const valueElement = elements[i];
        const name = elements[i].name;

        if(name){
            result[name] = valueElement.value;
        }
    }
    console.log(result);
}

form.addEventListener('submit', reload);


