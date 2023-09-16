const roots = document.getElementById('root');
const student_exam_id = localStorage.getItem('student_exam_id');
const base_url = 'http://51.250.97.89:8008';

getFromApi();

async function getFromApi() {
    const url = `${base_url}/api/v1/exam/question/next?student_exam_id=${student_exam_id}`;
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        renderData(data);

        console.log(data);
    }
}


function renderData(data){
    const root = document.querySelector('#root');
    const directions = document.querySelector('#directions');

    data.options.forEach((item) => {
        const addElemOPtion = document.createElement('option');
        
        
        addElemOPtion.value = item.option_id;
        addElemOPtion.textContent = item.option;
        directions.appendChild(addElemOPtion);
        root.appendChild(directions);
    })
}
