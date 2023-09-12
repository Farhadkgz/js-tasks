const submit = document.querySelector('.btn2')
const student_exam_id = localStorage.getItem('student_exam_id');

submit.addEventListener('click', (e) => {
    e.preventDefault();

    localPost();
})

const base_url = 'http://51.250.97.89:8008';

  async function localPost(){
    const url = base_url + '/api/v1/exam/start?student_exam_id=' + student_exam_id;

    const options = {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        }
    }

    const response = await fetch(url, options);
    if(response.ok){
        const responseData = await response.json();
    }
  }


