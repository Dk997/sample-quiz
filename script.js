const quizData = [
    {
        question : "which language runs on browsr?",
        a: "java",
        b: "c",
        c: "python",
        d:"javascript",
        correct: "d"
  },
  {
  question : "which of the following is not intel processor?",
  a: "pentium 4",
  b: "i3",
  c: "ryzon",
  d:"i5",
  correct: "c"
  },
  {
      
    question : "what is the full form of TCS?",
    a: "TATA COMMUNICATION SERVICE",
    b: "TATA CONSULTENCY SERVICES",
    c: "TATA COMMUNICATION SYSTEM",
    d:"NONE OF THE ABOVE",
    correct: "b"
  },
  {
      
    question : "In which year Google was luanched?",
    a: "1998",
    b: "1995",
    c: "1996",
    d:"1997",
    correct: "a"
  },
];
 //assigning variables
  const quiz = document.getElementById("quiz")
  const answerEls = document.querySelectorAll('.answer')
  const questionEl =document.getElementById('question')

  const aText = document.getElementById('a-text')
  const bText = document.getElementById('b-text')
  const cText = document.getElementById('c-text')
  const dText = document.getElementById('d-text')
  const submitBtn = document.getElementById('submit')

  //initialising
   let currentQuiz = 0
   let score = 0

   loadQuiz()
    function loadQuiz() {
        deselectAnswer()
         const currentQuizData = quizData[currentQuiz];
        
         questionEl.innerText = currentQuizData.question
          aText.innerText = currentQuizData.a
          bText.innerText = currentQuizData.b
          cText.innerText = currentQuizData.c
          dText.innerText = currentQuizData.d
    }
    function deselectAnswer() {
        answerEls.forEach(answerEls => answerEls.checked = false)
    }

    function getselcted() {
         let answer
         answerEls.forEach(answerEl => {
             if(answerEl.checked){
                 answer = answerEl.id
             }
         })
         return answer;
    }
submitBtn.addEventListener('click', () => {
    const answer = getselcted()
    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++   //for featching the next question   

        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else {
            quiz.innerHTML = ` <h2> you answerd ${score}/${quizData.length} questons correctly.
            <button onclick = "location.reload()">reload</button>`                          //for assigning a variable use `(tilde) key
        }
    }
})
