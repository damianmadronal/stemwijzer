var currentQuestion = 0;

function start() {
    document.getElementById("stemwijzer-container").classList.add("d-none");
    document.getElementById("questions-container").classList.remove("d-none");
    setQuestion();
}

function setQuestion() {
    if (subjects[currentQuestion]) {
        document.getElementById("questionTitle").innerHTML =
            currentQuestion + 1 + ". " + subjects[currentQuestion].title;
        document.getElementById("questionBox").innerHTML =
            subjects[currentQuestion].statement;
    } else {
        document.getElementById("questions-container").classList.add("d-none");
        document.getElementById("result-container").classList.remove("d-none");
        getResult();
    }
}

function saveQuestion(answer) {
    subjects[currentQuestion].answer = answer;
    console.log(subjects[currentQuestion].answer);
    currentQuestion++;
    setQuestion();
}

function getResult() {}

// function showResult() {

// }
