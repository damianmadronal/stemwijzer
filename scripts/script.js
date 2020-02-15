var count = 0;

var answers = [];

function start() {
    // makeCheckboxes();
    var container = document.getElementById("stemwijzer-container");
    container.classList.add("d-none");

    var container = document.getElementById("questions-container");
    container.classList.remove("d-none");
    getQuestion();
}
function getQuestion() {
    var question = subjects[count].statement;
    var title = subjects[count].title;
    count++;
    document.getElementById("questionBox").innerHTML = question;
    document.getElementById("questionTitle").innerHTML = count + ". " + title;
    count--;
}

function answerQuestion(answer) {
    if (!subjects[count]) {
        var container = document.getElementById("questions-container");
        container.classList.add("d-none");

        var container = document.getElementById("result-container");
        container.classList.remove("d-none");
        getResult();
        return;
    }

    saveAnswer(answer, subjects[count].statement);

    if (subjects[count].statement) {
        count++;
        var question = subjects[count].statement;
        var title = subjects[count].title;
        document.getElementById("questionBox").innerHTML = question;
        document.getElementById("questionTitle").innerHTML =
            count + ". " + title;
        count--;
    }

    count++;
}

function saveAnswer(answer, question) {
    var test = [answer, question];
    answers.push(test);
    console.log(answers);
}

function getResult() {
    console.log("result");
}
