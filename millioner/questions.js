'use strict';

class Question {
    constructor(question, answer, wrightAnswer) {
        this.question = question;
        this.answer = answer;
        this.wrightAnswer = wrightAnswer;
    }
}

let questions = [
    new Question("Какой сегодня день?", ["Понедельник", " Вторник ", " Среда", " Четверг"], 'Среда'),
    new Question('Какой сейчас год?', [' 2020' , ' 2023' , ' 2021' , ' 2022'], "2021"),
    new Question('В какой стране мы живем?', [" Россия", " Бразилия", " Китай", " Норвегия"], 'Россия'),
    new Question('Какой породы моя собака?', [" Питбуль", " Лабрадор", " Такса", " Корги"], 'Корги'),
    new Question('Какое сейчас время года?', [' Лето', " Осень", " Зима", " Весна"], "Осень"),
];