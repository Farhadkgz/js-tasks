const btns = document.querySelector('.btn_start');
const student_exam_id = localStorage.getItem('student_exam_id');
const base_url = 'http://51.250.97.89:8008';

btns.addEventListener('click', async () => {
    const url = base_url + '/api/v1/exam/start?student_exam_id=' + student_exam_id;

    const options = {
        method: 'POST'
    }

    const response = await fetch(url, options);
    if(response.ok){
        const data = await response.json();
        console.log(data);

        localStorage.setItem('test_info', JSON.stringify(data));

        window.location.href = 'test.html';
    }
})
