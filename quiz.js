
            var ansArray = [];
            var CorrectArray = [3,2,0,0,2];
            var currentQuestion = 0; 
            var ansblock
            var quiz
            var score = 0
            function startQuiz(){
                document.getElementById("buttonsdiv").style.visibility = "visible";
                document.getElementById("subhead").style.display="none";
                document.getElementById("startbutton").style.display="none";
            }
             function questiononevisible(){
                document.getElementById("question0").style.display="block";
                document.getElementById("question2").style.display="none";
                document.getElementById("question1").style.display="none";
                document.getElementById("question3").style.display="none";
                document.getElementById("question4").style.display="none";
             }
             function questiontwovisible(){
                document.getElementById("question0").style.display="none";
                document.getElementById("question2").style.display="none";
                document.getElementById("question1").style.display="block";
                document.getElementById("question3").style.display="none";
                document.getElementById("question4").style.display="none";
             }
             function questionthreevisible(){
                document.getElementById("question2").style.display="block";
                document.getElementById("question1").style.display="none";
                document.getElementById("question0").style.display="none";
                document.getElementById("question3").style.display="none";
                document.getElementById("question4").style.display="none";
             }
             function questionfourvisible(){
                document.getElementById("question0").style.display="none";
                document.getElementById("question2").style.display="none";
                document.getElementById("question1").style.display="none";
                document.getElementById("question3").style.display="block";
                document.getElementById("question4").style.display="none";
             }
             function questionfivevisible(){
                document.getElementById("question0").style.display="none";
                document.getElementById("question2").style.display="none";
                document.getElementById("question1").style.display="none";
                document.getElementById("question3").style.display="none";
                document.getElementById("question4").style.display="block";
             }
             function nextQuestion() {
                // Hide the current question
                document.getElementById("question" + currentQuestion).style.display = "none";
    
                // Increment the current question
                currentQuestion++;
    
                if (currentQuestion < 5) {
                    // Display the next question
                    document.getElementById("question" + currentQuestion).style.display = "block";
                } else {
                    // If all questions are answered, show the final score
                    finalScore();
                }
            }
            function ansCheck(buttonNumber){
                quiz = buttonNumber
                console.log(buttonNumber)
                for(i=0 ; i<5 ; i++){
                    if(document.forms[buttonNumber].elements[i].checked){
                        ansArray[buttonNumber] = i
                    }
                }
                ansblock = "ansblock"+buttonNumber;
                if(ansArray[buttonNumber]==CorrectArray[buttonNumber])
                {
                     score++
                     console.log("hello",score)
                     document.getElementById(ansblock).style.visibility = "visible";
                     document.getElementById(ansblock).innerHTML="Correct!!";
                }
                else
                    {
                     document.getElementById(ansblock).style.visibility = "visible";
                     document.getElementById(ansblock).innerHTML="Wrong!!";
                }
            }
            function finalScore(){
                document.getElementById("question4").style.display ="none"
                document.getElementById("subhead").style.display = "block"
                document.getElementById("buttonone").style.display = "none"
                document.getElementById("buttontwo").style.display = "none"
                document.getElementById("buttonthree").style.display = "none"
                document.getElementById("buttonfour").style.display = "none"
                document.getElementById("buttonfive").style.display = "none"
                document.getElementById("text").innerHTML = "Thank you "
                if(score<=4){
                alert("Are you sure to exit from quiz! , And ready to see your score !!")
                document.getElementById("subhead").innerHTML = "you scored :-     " +score+ "/5";
                 }
                }
        