const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.querySelector("#quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector('#question');
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(ele => ele.checked = false)
}

function getSelected() {
    let answer;
    answerEls.forEach(ele =>{
        if(ele.checked){
            answer = ele.id
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer){
    if(answer === quizData[currentQuiz].correct){
        score++
    }
    currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz()
    }
    else{
        question.innerHTML = `Your Score : ${score}/${quizData.length}`;
        document.querySelector("ul").style.display = 'none';
        submitBtn.innerHTML = 'Reload'
        submitBtn.addEventListener('click', function(){location.reload()})
    }
  }  
})