const base_url = "http://51.250.97.89:8008";
const student_exam_id = localStorage.getItem("student_exam_id");

(async function getQuestion() {
    const url =
        base_url +
        "/api/v1/exam/question/next?student_exam_id=" +
        student_exam_id;

    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        renderData(data);
    }
})();

function renderData(data) {
    document.querySelector("#question").textContent = data.question;
    let options = "";

    data.options.forEach((element, index) => {
        options += `<label><input type="checkbox" name="option${index}">${element.option}</label><br>`;
    });

    document.querySelector("#answers").innerHTML = options;

    const array = [];

    document.querySelectorAll('[type="checkbox"]').forEach((el) => {
        el.addEventListener("change", () => {
            const labelText = el.parentElement.textContent.trim();

            if (el.checked) {
                array.push(labelText);
            } else {
                const index = array.indexOf(labelText);
                if (index !== -1) {
                    array.splice(index, 1);
                }
            }

            console.log(array);
        });
    });
}
