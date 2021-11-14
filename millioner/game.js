'use strict';
let game = {

    run() {
        alert("Добро пожаловать в игру 'Кто хочет стать миллионером!'");
        while (true) {
            if (askQuestion.currentQuestion >= questions.length) {
                let word = 'вопрос';
                let text = '';
                if (check.count == 1) {
                    text = `Игра окончена, вы правильно ответили на ${check.count}  ${word}!`;
                } else if (check.count >= 2 && check.count < 5) {
                    text = `Игра окончена, вы правильно ответили на ${check.count}  ${word}a!`;
                } else {
                    text = `Игра окончена, вы правильно ответили на ${check.count}  ${word}ов!`;
                }
                text += "\n"
                text += 'Хотите сыграть еще раз?'
                let replay = confirm(text);
                if (!replay) {
                    return;
                }
                askQuestion.currentQuestion = 0;
            }
            let question = askQuestion.getCurrentQuestion(questions);
            let answers = askQuestion.getCurrentAnswer(questions);

            let userAnswer = askQuestion.getUserAnswer(question, answers);
            if (userAnswer === null) {
                alert('Игра окончена.');
                break;
            } else {
                check.checkAnswer(userAnswer, questions);
            }

        }

    }

}
game.run();