const base_url = "http://51.250.97.89:8008";
const student_exam_id = localStorage.getItem("student_exam_id");
let result = { answers: [], question_id: null };

(async function getQuestion() {
    const url = base_url + "/api/v1/exam/question/next?student_exam_id=" + student_exam_id;

    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        result.question_id = data.question_id; 
        renderData(data);
    }
})();

function renderData(data) {
    document.querySelector("#question").textContent = data.question;
    let options = "";

    data.options.forEach((element, index) => {
        options += `<div><input type="checkbox" value="${element.option_id}" name="option${index}"><span>${element.option}</span></div><br>`;
    });

    document.querySelector("#answers").innerHTML = options;


    document.querySelectorAll('[type="checkbox"]').forEach((el) => {
        el.addEventListener("change", () => {
            const optionId = el.value;

            if (el.checked) {
                result.answers.push(Number(optionId));
            } else {
                const index = result.answers.indexOf(Number(optionId));
                if (index !== -1) {
                    result.answers.splice(index, 1);
                }
            }
        });
    });
}

function sendAnswerData(data) {
    const apiUrl = base_url + 'api/v1/exam/question/answer';

    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    fetch(apiUrl, requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Ошибка сети");
            }
            return response.json();
        })
        .then((responseData) => {
            console.log("Данные успешно отправлены:", responseData);
        })
        .catch((error) => {
            console.error("Ошибка при отправке данных:", error);
        });
}

const nextButton = document.querySelector(".btn_test_next");
nextButton.addEventListener("click", () => {
    sendAnswerData(result);
});