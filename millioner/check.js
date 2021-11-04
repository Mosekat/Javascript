"use strict";
let check = {
    count: 0,

    checkAnswer(userAnswer, arr) {

        if (userAnswer === arr[askQuestion.currentQuestion].wrightAnswer) {
            this.count++;
            console.log('Поздравляю, это правильный ответ!');
        }
        askQuestion.currentQuestion++;
        return;
    }

}