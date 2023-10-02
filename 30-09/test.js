const base_url = 'http://51.250.97.89:8008';
const student_exam_id = localStorage.getItem('student_exam_id');

(async function getQuestion(){
    const url = base_url + '/api/v1/exam/question/next?student_exam_id=' + student_exam_id;
   
    const response = await fetch(url);

    if(response.ok){
        const data = await response.json();
        renderData(data);
    }
})();


function renderData(data){
    const totalQuestionCount = data.totalQuestionCount;

    document.querySelector('#question').textContent = data.question;
    let options = '';
    let pagination = '';

    console.log(totalQuestionCount);

    data.options.forEach(element => {
        options += `<label><input type="checkbox">${element.option}</label><br>`;
    });

    document.querySelector('#answers').innerHTML = options;

    document.querySelectorAll('[type="checkbox"]').forEach(el => {
        el.addEventListener('change', () => {
            
        })
    })

    // ----------------------------TotalQuestionCount------------------------------------

    for(let i = 1; i <= totalQuestionCount; i++){
        pagination += `<div class="paginate-item">
        <span>${i}</span>
        </div>`;
    }


    document.querySelector('#pagination').innerHTML = pagination;

    // -----------------------------Pagination-------------------------------------------

    const questionNum = data.questionNum;
    const paginationItems = document.querySelectorAll('.paginate-item');

    if (typeof questionNum === 'number' && questionNum >= 1 && questionNum <= totalQuestionCount) {
        paginationItems[questionNum - 1].classList.add('paginate-item-active');
    }
    
}

