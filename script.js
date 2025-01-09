const questions=[
    {
        question:"What is the largest internal organ in the human body? ",
        answers:[
            { text:"Lungs",correct:false},
            { text:"Heart",correct:false},
            { text:"Kidneys",correct:false},
            { text:"Liver",correct:true}

        ]

    },
    {
        question:"What is the percentage of the Earth covered by water? ",
        answers:[
            { text:"51%",correct:false},
            { text:"61%",correct:false},
            { text:"71%",correct:true},
            { text:"81%",correct:false}

        ]

    },
    {
        question:"Which country is the band AC/DC from? ",
        answers:[
            { text:"New Zealand",correct:false},
            { text:"UK",correct:false},
            { text:"USA",correct:false},
            { text:"Australia",correct:true}

        ]
        
    },
    { question:"What is the equivalent of 100 Celcius in Fahrenheit ",
        answers:[
            { text:"212",correct:true},
            { text:"182",correct:false},
            { text:"152",correct:false},
            { text:"232",correct:false}

        ]        
    },
    {
        question:"Dom Pérignon is known as the Father of what? ",
        answers:[
            { text:"Computing science",correct:false},
            { text:"Telephone",correct:false},
            { text:"Champagne",correct:true},
            { text:"Electricity",correct:false}

        ]
        
    }
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}
 function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo+" . "+currentQuestion.question;
    
    currentQuestion.answers.forEach(answer =>{
        const button=document .createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
 }

 function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

 function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } 
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
            
        }
        button.disabled=true;
    });
    nextButton.style.display="block";

 }
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}

 nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 });
  startQuiz();

