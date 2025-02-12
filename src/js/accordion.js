let toggleQuestion = document.querySelectorAll(".question-accordion");
let shrinkIcon = document.querySelectorAll(".shrink-icon");
hiddenAnswers = document.querySelectorAll(".answer");

for (let question = 0; question < toggleQuestion.length; question++) {
    toggleQuestion[question].addEventListener("click", () => {
        if (hiddenAnswers[question].classList.contains("answer-opened")) {
            hiddenAnswers[question].classList.remove("answer-opened");
            shrinkIcon[question].classList.remove("activated");
        } else {
            for (let answer = 0; answer < hiddenAnswers.length; answer++) {
                if (hiddenAnswers[answer].classList.contains("answer-opened")) {
                    hiddenAnswers[answer].classList.remove("answer-opened");
                    shrinkIcon[answer].classList.remove("activated");
                }
                hiddenAnswers[question].classList.add("answer-opened");
                shrinkIcon[question].classList.add("activated");
            }
        }
    })
}