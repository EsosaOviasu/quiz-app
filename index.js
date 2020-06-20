let i = 0;

function beginQuiz() {
    $('#begin').on('click', function(event) {
        generateQuestions();
    });
    console.log('beginQuiz has ran');
};




function updateQuizQuestionAndOptions() {
        $('.js-question').append(`${questionSet[i].question}`);
        $('.optionOne').text(`${questionSet[i].options[0]}`);
        $('.optionTwo').text(`${questionSet[i].options[1]}`);
        $('.optionThree').text(`${questionSet[i].options[2]}`);
        $('.optionFour').text(`${questionSet[i].options[3]}`);
        $('.optionFive').text(`${questionSet[i].options[4]}`);
    i++
    return i;
};



function generateQuestions() {
    $('.quiz-title').html(`
        <h1>Dance Community Quiz</h1>
            <div id="questionNumAndScore">
                <h2 class="questionNum">Question: ${currentQuestion}/5</h2>
                <h2 class="score">Score: ${currentScore}/5</h2>
            </div>
`)
    $('.quiz-box').html(`
        <form id="js-questions">
            <h3 class="js-question"></h3>
            <div class="row-question">
                 <input type="radio" id="${questionSet[i].options[0]}" name="pick-one" value="${questionSet[i].options[0]}">
                     <label for="${questionSet[i].options[0]}" class="optionOne"></label>
            </div>
            <div class="row-question">
                <input type="radio" id="${questionSet[i].options[1]}" name="pick-one" value="${questionSet[i].options[1]}">
                     <label for="${questionSet[i].options[1]}" class="optionTwo"></label>
            </div>
            <div class="row-question">
             <input type="radio" id="${questionSet[i].options[2]}" name="pick-one" value="${questionSet[i].options[2]}">
                <label for="${questionSet[i].options[2]}" class="optionThree"></label>
            </div>
            <div class="row-question">
             <input type="radio" id="${questionSet[i].options[3]}" name="pick-one" value="${questionSet[i].options[3]}">
                <label for="${questionSet[i].options[3]}" class="optionFour"></label>
            </div>
            <div class="row-question">
             <input type="radio" id="${questionSet[i].options[4]}" name="pick-one" value="${questionSet[i].options[4]}">
                <label for="${questionSet[i].options[4]}" class="optionFive"></label>
            </div>
            <div class="submit-button">
                <button type="submit" id="validate">Submit</button>
                <button type="button" id="next">Next</button>
            </div>
        </form>
    `)
    $('#next').hide();
    updateQuizQuestionAndOptions();
    console.log('generateQuestion has run');
};




function handleQuizQuestions() {
    $('.quiz-box').on('click','#next', function(event) {
        currentQuestion-1 === questionSet.length ? showResults() : generateQuestions();
    });
        console.log('handleQuizQuestions has ran');
};


function addValidationMsg(aString) {
    $("input[name=pick-one]:checked").parent().append(aString)
    $('input').not(':checked').parent().find('p').remove();
};


function validateQuizAnswer() {
    $('.quiz-box').on('submit', '#js-questions', function(event) {
        event.preventDefault();
        let msg;
        if (!$("input[name=pick-one]:checked").val()) {
            alert("Please select an answer");
            return;
        }
        if ($("input[name=pick-one]:checked").val() === questionSet[i-1].answer) {
            msg= `<p class="correct">Correct!</p>`
            addValidationMsg(msg);
        }
        else {
            msg= `<p class="incorrect">Sorry, the correct answer is ${questionSet[i-1].answer}</p>`
            addValidationMsg(msg);
        }
        $('#next').show();
        $('#validate').hide();
        updateQuizScore();
    });
    console.log('validateQuizAnswer has ran')

};


function updateQuizScore() {
    if ($("input[name=pick-one]:checked").val() === questionSet[i-1].answer) {
        currentQuestion++;
        currentScore++;
        return currentQuestion;
        return currentScore;
    }
    else {
        currentQuestion++;
    }
    console.log('updateQuizScore has ran')
};

function showResults() {
    $('.quiz-title').html(`
        <h1>Dance Community Quiz</h1>
    `)
    $('.quiz-box').html(`
        <legend>Congratulations on completing this quiz!</legend>
            <p>Your final score was ${currentScore}/5</p>
                <div class="submit-button">
                    <button type="button" id="restart">Try Again</button>
                </div>
    `);
    currentQuestion = 1;
    currentScore = 0;
    i = 0;
};


function restartQuiz() {
    $('.quiz-box').on('click','#restart', function(event) {
      generateQuestions();
    });
  };



function runQuiz() {
    beginQuiz();
    handleQuizQuestions();
    validateQuizAnswer();
    restartQuiz();
};

runQuiz();