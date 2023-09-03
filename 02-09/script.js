
const textContainer = document.getElementById('text-container');

async function fetchData(url) {
   try {
       const response = await fetch(url);

       if (response.ok) {
           const data = await response.json();

           const array = [];
           data.forEach(e => {
               array.push(e.title);
           });

           array.forEach(text => {
               const pr = document.createElement('p');
               pr.textContent = text;
               textContainer.appendChild(pr);
           });
           console.log(data);
       } else {
           throw new Error(`HTTP error! Status: ${response.status}`);
       }
   } catch (error) {
       console.error('An error occurred:', error);
   }
}


fetchData('https://jsonplaceholder.typicode.com/users');
fetchData('https://jsonplaceholder.typicode.com/todos');
fetchData('https://jsonplaceholder.typicode.com/photos');
