 //Timer Functionality
 let totalTime = 150;
 let min = 0;
 let sec = 0;
 let    counter = 0;
 let    timer = setInterval(myTimer, 1000)

   function myTimer(){
       counter++;
       min = Math.floor((totalTime - counter)/60)
       sec = totalTime - min * 60 - counter
       //console.log(sec);
       
   // const timerBox = document.getElementById('timerBox')
   const timeLeft  = document.getElementById('timeLeft') 
   timeLeft.textContent = 'TIMELEFT ::       ' + min + " : " + sec
   timeLeft.style.fontSize = '1.5rem'
   timeLeft.style.color = 'green'
   //timerBox.appendChild(timeLeft)

   if(counter === totalTime){
       clearInterval(timer)
       timeUp.style.textAlign = 'centre'
       timeUp.style.fontSize = '20px'
       timeUp.style.paddingTop = '-5px'
       timeUp.style.display = 'block'
       timeUp.style.color = 'red'
       questionContainer.style.display ='none'
       optionContainer.style.display ='none'
       buttonContainer.style.display ='none'
       submitQuiz.style.display ='none'
       myScore.innerHTML = ` You scored ${score} / ${questArray .length * 10}`
       myScore.style.fontSize = '30px'
       myScore.style.paddingTop = '50px'
       myScore.style.textAlign = 'center'     
       let A = "Distinction"; B = "Very Good"; C = "Credit"; D = "Pass"; F = "Fail";
        let result = document.getElementById("myScore")
        if (score >=80) {
            result.innerText = ("Your result is " + A) 
        } else if (score >=70) {
            result.innerText = ("Your result is " + B)
        } else if (score >=60) {
            result.innerText = ("Your result is " + C)
        } else if (score >=50) {
            result.innerText = ("Your result is " + D)
        } else if (score >=30) {
            result.innerText = ("Your result is " + D)
        }
        myScore.innerHTML = ` You scored ${score} / ${questArray .length * 10}`
    }
}

//Arrays of question,options and answers
const questArray = [
    {
        question: '1) A temperature of 20^C is the same as',
        a: '36^F',
        b: '68^F',
        c: '11.1^F',
        d: '43.1^F',
        correct_answer: '68^F'
    },
    {
        question: '2) The amount of required to raise the temperature of the body is',
        a: 'Thermal Energy',
        b: 'Heat loss',
        c: 'Thermal Capacity',
        d: 'Specific heat capacity',
        correct_answer: 'Thermal Capacity'
    },
    {
        question: '3) The ball is ______',
        a: 'big',
        b: 'bigger',
        c: 'biggest',
        d: 'more bigger',
        correct_answer: 'big'
    },
    {
        question: '4) He is a ______',
        a: 'Man',
        b: 'Girl',
        c: 'Woman',
        d: 'Book',
        correct_answer: 'Man'
    },
    {
        question: '5) What is the sum of 5 and 9',
        a: '4',
        b: '-4',
        c: '14',
        d: '13',
        correct_answer: '14'
    },
    {
        question: '6) If a boy is 16 this year,what will be his age in the next two years?',
        a: '16',
        b: '20',
        c: '18',
        d: '14',
        correct_answer: '18'
    },
    {
        question: '7) How many planet do we have in the solar system?',
        a: '4',
        b: '7',
        c: '9',
        d: '8',
        correct_answer: '8'
    },
    {
        question: '8) What is the scientific name of maize?',
        a: 'maizes',
        b: 'peas',
        c: 'zea mays',
        d: 'Zea maize',
        correct_answer: 'zea mays'
    },
    {
        question: '9) What are two type of ion',
        a: 'ion and baion',
        b: 'ion 1 and ion 2',
        c: 'an-ion and can-ion',
        d: 'an-ion and cat-ion',
        correct_answer: 'an-ion and cat-ion'
    },
    {
        question: '10) What is the chemical formula for water',
        a: 'HO2',
        b: '2HO',
        c: 'H2O',
        d: 'O2H',
        correct_answer: 'H2O'
    },
]
//Variable declaration
const timeUp = document.getElementById('timeUp')
const questionContainer = document.getElementById('questionContainer')
const optionContainer = document.getElementById('optionContainer')
const buttonContainer = document.getElementById('buttonContainer')
const submitQuiz = document.getElementById('submitQuiz')
const myScore = document.getElementById('myScore')

//make the variable myQuiz to zero
 let myQuiz = 0

 //initialize my score to zero
 let score = 0

 //hide this button
 submitQuiz.style.display = 'none'

 //hide the time up button
 timeUp.style.display = 'none'

 //populate the question and option on the screen
 function loadTest(){
     //Display questions
    let myExam = questArray[myQuiz]
    let myQuestion = myExam.question
    questionContainer.textContent = myQuestion
    //console.log(myQuestion);

    //Display options
    let options = `
    A<input type = 'radio' name = 'option' value = '${myExam.a}'/> ${myExam.a} <br/><br/>
    B<input type = 'radio' name = 'option' value = '${myExam.b}'/> ${myExam.b} <br/><br/>
    C<input type = 'radio' name = 'option' value = '${myExam.c}'/> ${myExam.c} <br/><br/>
    D<input type = 'radio' name = 'option' value = '${myExam.d}'/> ${myExam.d} <br/><br/> 
    `

    optionContainer.innerHTML = options
 }

 loadTest()

 //Add an event to the next and previous button
 next.addEventListener('click', validateNext)

 //Create a function for next button
 function validateNext(){
     let radioCheck = document.querySelector('input[type = radio]:checked')
     //If statement to check if a user checked or not
     if(!radioCheck){
         alert('Please select an option')
     }
     else{
         
         if(myQuiz === questArray.length - 1){
             submitQuiz.style.display = 'block'
             next.style.display = 'none'
            }
            
            //Check for score
            if(radioCheck.value === questArray[myQuiz].correct_answer){
                score += 10
                //    alert(`You scored ${score}`)
            }
            
            //Go to the next question
            myQuiz++
            loadTest()
            
    }
}
 //Add an event to the next and previous button
  previous.addEventListener('click', validatePrevious)
//create a function for previous question
 function validatePrevious(){
    let radioCheck =document.querySelector('input[type = radio]:checked')
    //if statement to go back to previous question
    // if (!radioCheck){
    //     alert('back to previous question')
    // }
    // else{
        
        //Go to the previous question
        myQuiz--
        loadTest()
    // }
        }
     
 //Add an event listener to the submit button
 submitQuiz.addEventListener('click',submitFunction)

 //create a function
 function submitFunction(){
     questionContainer.style.display ='none'
     optionContainer.style.display ='none'
     buttonContainer.style.display ='none'
     submitQuiz.style.display ='none'
     myScore.innerHTML = ` You scored ${score} / ${questArray .length * 10}`
     myScore.style.fontSize = '40px'
     myScore.style.paddingTop = '100px'
     myScore.style.textAlign = 'center'
 }
 
