'use strict';
let askQuestion = {
    currentQuestion: 0,

    getCurrentQuestion(arr) {

        for (let i = this.currentQuestion; i < arr.length; i++) {

            let question = arr[i].question;

            return question;
        }

    },
    getCurrentAnswer(arr) {
        for (let i = this.currentQuestion; i < arr.length; i++) {

            let answers = arr[i].answer;

            return answers;
        }

    },

    getUserAnswer(question,answers) {
        let userAnswer = prompt(`${question}\n${answers}`);
            return userAnswer;
    }

}







