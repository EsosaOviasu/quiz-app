function beginQuiz() {
    $('#begin').on('click', function(event) {
        generateQuestions();
    });
    console.log('beginQuiz has ran');
};

let i = 0;

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
    $('.quiz-box').html(`
        <form id="js-questions">
            <h2 class="js-question"></h2>
            <div class="row-question">
                 <input type="radio" name="pick-one" value="${questionSet[i].options[0]}">
                     <label class="optionOne"></label>
            </div>
            <div class="row-question">
                <input type="radio" name="pick-one" value="${questionSet[i].options[1]}">
                     <label class="optionTwo"></label>
            </div>
            <div class="row-question">
             <input type="radio" name="pick-one" value="${questionSet[i].options[2]}">
                <label class="optionThree"></label>
            </div>
            <div class="row-question">
             <input type="radio" name="pick-one" value="${questionSet[i].options[3]}">
                <label class="optionFour"></label>
            </div>
            <div class="row-question">
             <input type="radio" name="pick-one" value="${questionSet[i].options[4]}">
                <label class="optionFive"></label>
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
        generateQuestions();
        console.log('handleQuizQuestions has ran');
    });
};

function validateQuizAnswer() {
    $('.quiz-box').on('submit', '#js-questions', function(event) {
        event.preventDefault();
        if ($("input[name=pick-one]:checked").val() === questionSet[i-1].answer) {
            $("input[name=pick-one]:checked").parent().append(`<p class="correct">Correct!</p>`)
        }
        else {
            $("input[name=options]:checked").parent().append(`<p class="incorrect">Sorry, the correct answer is ${questionSet[i-1].answer}</p>`)
        }

    });
    console.log('validateQuizAnswer has ran')

};

function updateQuizScore() {


};

function fQuizScore() {


};



function runQuiz() {
    beginQuiz();
    handleQuizQuestions();
    validateQuizAnswer();
};

runQuiz();