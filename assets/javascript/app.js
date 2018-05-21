// Game Controller

// Game Object

let game = {

    nextQuestionInRound: () => {
        // Randomly choose question from Array
        choosenQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
        question = choosenQuestion.question;
        responses = choosenQuestion.responses;
        value = choosenQuestion.value;
        category = choosenQuestion.category;
        correct = choosenQuestion.correct;
        timer = 10;
        view.displayQuestion();
        view.displayResponses();
        view.displayTimer();
        view.updateStatBar();
        game.timerRun();
    },

    checkResponse: () => {
        $('.userResponse').click(function () {
            let userSelection = $(this).html();
            $('.userResponse').off();
            if (correct === userSelection) {
                console.log(userSelection);
                score += value;
                // counter++;
                view.updateStatBar();
                view.dialogCorrectNextQuestion();
                game.timerStop();
            }
            if (correct !== userSelection) {
                console.log(userSelection);
                score -= value;
                // counter++;
                view.updateStatBar();
                game.timerStop();
                view.dialogInCorrectNextQuestion();
            }
            if (counter == 11) {
                view.gameOverScreen();
                $('.ui-dialog').hide();
                $('.game-area').hide();
            }
        })
    },

    timerRun: () => {
        intervalId = window.setInterval(game.timerDecrement, 1000);
        clockRunning = true;
        game.timerDecrement();
    },

    timerDecrement: () => {
        //  Decrease timer by one.
        timer--;
        //  Update the timer div with the current timer
        $("#timer").text(timer);
        //  Once timer hits zero...
        if (timer === 0) {
            game.timerStop();
            clockRunning = false;
            score -= value;
            $('.userResponse').off();
            view.updateStatBar();
            view.dialogTimesUpNextQuestion();
        }
    },

    timerStop: () => {
        clearInterval(intervalId);
        clockRunning = false;
    },

    clearArrays: () => {
        questionsArray.push(...usedQuestions);
        usedQuestions = [];
        responses = [];
    },

    pushUsedQuestion: () => {
        usedQuestions.push(choosenQuestion);
        questionsArray.splice(questionsArray.indexOf(choosenQuestion), 1);
    }

};

// All the Data for the Game to function

// Global Variables
let playerName = "";
let correct = 0;
let inCorrect = 0;
let counter = 0;
let timer = 0;
let clockRunning = false;
let setInterval;
let intervalId;
let score = 0;
let response;
let responses = [];
let usedQuestions = [];


// Array of Question Objects
let questionsArray = [
    {
        question: "During his embarrassing Dundie award presentation, Michael covers a number of popular songs. To whom is Michael presenting a Dundie award when he sings along to You Sexy Thing by '70s British funk band Hot Chocolate?",
        responses: [
            "Who is Ryan?",
            "Who is Jim?",
            "Who is Oscar?",
            "Who is Pam?"
        ],
        correct: "Who is Ryan?",
        category: "Misc",
        value: 100
    },
    {
        question: " In the very first scene of The Office, Michael asks Jim how things are going at which public place?",
        responses: [
            "What is the Gym?",
            "What is the Bus Station",
            "What is the Office?",
            "What is the Library?"
        ],
        correct: "What is the Library?",
        category: "Episodes",
        value: 200
    },
    {
        question: "What is Michael Scott's middle name?",
        responses: [
            "Who is Steven??",
            "Who is Gary?",
            "Who is Sam?",
            "Who is Elliot?"
        ],
        correct: "Who is Gary?",
        category: "Names",
        value: 300
    },
    {
        question: "What is the web address of Creed's blog?",
        responses: [
            "What is www.creedthoughts.gov.www/creedthoughts ?",
            "What is www.creedthought.com.www/creedthoughts ?",
            "What is www.creedthoughts.gov/creedthoughts ?",
            "What is www.creedthoughts.com/creedthoughts ?"
        ],
        correct: "www.creedthoughts.gov.www/creedthoughts ?",
        category: "Misc",
        value: 400
    },
    {
        question: " In the Fun Run episode, what objects in Angela's freezer convinced her that Dwight had killed her cat?",
        responses: [
            "What is Ice Cream?",
            "What is Bags of Frozen Peas?",
            "What is Bags of Frozen French Fries?",
            "What is Frozen Beats?"
        ],
        correct: "What is Bags of Frozen Fries?",
        category: "Episodes",
        value: 500
    },
    {
        question: "What is the exclusive club that Pam, Oscar, and Toby establish in the episode Branch Wars?",
        responses: [
            "What is Tobie Sucks Club?",
            "What is Fancy Things Club?",
            "What is Book Club?",
            "What is Finer Things Club?"
        ],
        correct: "What is Finer Things Club?",
        category: "Episodes",
        value: 500
    },
    {
        question: "What substance does Jim put office supplies owned by Dwight and Andy into?",
        responses: [
            "What is Jello?",
            "What is Pudding?",
            "What is Water?",
            "What is Chocolate?"
        ],
        correct: "What is Jello?",
        category: "Names",
        value: 100
    },
    {
        question: "In Gay Witch Hunt, the office found out that Oscar was gay. In what earlier episode did Oscar say something that made him seem to be the exact opposite, or straight?",
        responses: [
            "What is The Rats?",
            "What is The Fire?",
            "What is The Bat?",
            "What is The Party?"
        ],
        correct: "What is The Fire?",
        category: "Epidodes",
        value: 200
    },
    {
        question: "When Michael burns his foot on the George Foreman grill and then asks the employees who else has had a legitimate disability, who replies that as a teenager he or she was once in an iron lung?",
        responses: [
            "Who is Stanley?",
            "Who is Jim?",
            "Who is Dwight?",
            "Who is Creed?"
        ],
        correct: "Who is Creed?",
        category: "Names",
        value: 400
    },
    {
        question: "Where did Michael get his World's Best Boss mug?",
        responses: [
            "What is Hobby Store?",
            "What is Spencers?",
            "What is Amazon?",
            "What is Dundies?"
        ],
        correct: "What is Spencers?",
        category: "Misc",
        value: 500
    },
    {
        question: "Whose funeral does Kelly say was the saddest ever?",
        responses: [
            "What is This One?",
            "What is Both?",
            "What is Last Ones?",
            "What is None?"
        ],
        correct: "What is Both?",
        category: "Misc",
        value: 300
    },
    {
        question: "Where does the show take place?.",
        responses: [
            "What is Scranten?",
            "What is Pittsburg?",
            "What is Philadelphia?",
            "What is Scranton?"
        ],
        correct: "What is Scranton?",
        category: "Misc",
        value: 200
    }


];

// All the Javascript that effects the view

// On Page Load

window.onload = () => {

    view.welcomeScreen();
    //view.gameOverScreen();

};

// View Object
let view = {

    welcomeScreen: () => {
        $('.game-area').hide();
        var welcomeHtml =
            "<h1>Are you up for the challenge?</h1>" +
            "<input type='text' name='playerName' id='playerNameInput' maxlength=16 placeholder='PLAYER NAME'>" +
            "<button id='button-begin-game'>BEGIN GAME</button>";
        $('.welcome-screen').html(welcomeHtml);
        $('#button-begin-game').click(function () {
            playerName = $('#playerNameInput').val().trim();
            if (playerName == "") {
                playerName = "A PLAYER HAS NO NAME";
            }
            $('.welcome-screen').hide();
            $('.game-area').show();
            game.nextQuestionInRound();
        });

    },

    updateStatBar: () => {
        var statsHtml =
            "<ul>" +
            "<li><p>" + playerName + "</p></li>" +
            "<li><p>$" + score + "</p></li>" +
            "</ul>";
        $('.stats-bar').html(statsHtml);

    },

    displayQuestion: () => {
        $('#category').text(category);
        $('#question').text(question);
        $('#question-value').text("$ " + value);

    },

    displayResponses: () => {
        responseChoices = $('.response-choices');
        for (var j = 0; j < responses.length; j++) {
            response = $('<li>').attr('class', 'userResponse').html(responses[j]);
            responseChoices.append(response);
        }
        game.checkResponse();
    },

    displayTimer: () => {
        $('#timer').text(timer);
        timer = 11;

    },

    dialogCorrectNextQuestion: () => {
        $('#dialog-correct-next-question').html("<p>" + playerName + "<br>YOU ARE CORRECT<br>EARNED<br>$" + value + "!</p>")
        $('#dialog-correct-next-question').dialog({
            classes: { "ui-dialog": "correct" },
            modal: true,
            resizable: false,
            position: { my: "center", at: "center" },
            dialogClass: "no-close",
            buttons: [
                {
                    text: "NEXT QUESTION",
                    click: function () {
                        $(this).dialog("close");
                        view.clearGameArea();
                        game.pushUsedQuestion();
                        game.nextQuestionInRound();
                        counter++;
                    }
                }
            ]
        })
    },

    dialogInCorrectNextQuestion: () => {
        $('#dialog-incorrect-next-question').html("<p>" + playerName + "<br>YOU ARE INCORRECT<br>LOSE<br>$" + value + "!</p>" +
            "<p> THE CORRECT ANSWER WAS:<br>" + correct + "<p>")
        $('#dialog-incorrect-next-question').dialog({
            classes: { "ui-dialog": "incorrect" },
            modal: true,
            resizable: false,
            position: { my: "center", at: "center" },
            dialogClass: "no-close",
            buttons: [
                {
                    text: "NEXT QUESTION",
                    click: function () {
                        $(this).dialog("close");
                        game.pushUsedQuestion();
                        view.clearGameArea();
                        game.nextQuestionInRound();
                        counter++;
                    }
                }
            ]
        })
    },

    dialogTimesUpNextQuestion: () => {
        $('#dialog-times-up-next-question').html("<p>" + playerName + "<br>TIME IS UP!<br>LOSE<br>$" + value + "!<p>" +
            "<p> THE CORRECT ANSWER WAS:<br>" + correct + "<p>")
        $('#dialog-times-up-next-question').dialog({
            classes: { "ui-dialog": "times-up" },
            modal: true,
            resizable: false,
            position: { my: "center", at: "center" },
            dialogClass: "no-close",
            buttons: [
                {
                    text: "NEXT QUESTION",
                    click: function () {
                        $(this).dialog("close");
                        game.pushUsedQuestion();
                        view.clearGameArea();
                        game.nextQuestionInRound();
                        counter++;
                    }
                }
            ]
        })
    },

    hideDialogBoxes: () => {
        $('.ui-dialog').hide();
    },

    clearGameArea: function () {
        $('#category').empty();
        $('#question').empty();
        $('#question-value').empty();
        $('.response-choices').empty();
        $('#timer').empty();
    },

    gameOverScreen: () => {
        game.timerStop();
        if (score > 1) {
            var gameOverHtml =
                "<h1>Congratulations " + playerName + "!<br>You Completed the Game with a score of <br>$" + score + "</h1>" +
                "<h1>Would You like to play Again?</h1>" +
                "<button id='button-restart-game'>NEW GAME</button>";
        } else if (score <= 0) {
            var gameOverHtml =
                "<h1>I'm Sorry " + playerName + "!<br>You Finished the Game with a score of <br>$" + score + "</h1>" +
                "<h1>You should play Again!</h1>" +
                "<button id='button-restart-game'>NEW GAME</button>";
        }
        $('.restart-screen').html(gameOverHtml);
        $('#button-restart-game').click(function () {
            $('.restart-screen').hide();
            counter = 0;
            score = 0;
            playerName = "";
            view.updateStatBar();
            game.clearArrays();
            $('.welcome-screen').show();
            view.welcomeScreen();

        });

    },

};