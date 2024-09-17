'use strict';
let askQuestion = {
    currentQuestion: 0,

    getCurrentQuestion(arr) {
        return arr[this.currentQuestion].question;

    },

    getCurrentAnswer(arr) {
            return arr[this.currentQuestion].answer;
    },

    getUserAnswer(question, answers) {

        return prompt(`${question}\n${answers}`);
    }

}







