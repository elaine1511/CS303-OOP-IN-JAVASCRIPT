class Question {
    constructor(questionId, answer) {
        this.questionId = questionId;
        this.answer = answer;
    }
    checkAnswer(correctAnswer) {
        return this.answer === correctAnswer;
    }
}

class Student {
    constructor(studentId, answers = []) {
        this.studentId = studentId;
        this.answers = answers;
    }
    addAnswer(question) {
        this.answers.push(question);
    }

}

class Quiz {
    constructor(questionsArray = [], students = []) {
        this.questions = new Map();
        //add line to convert questionsArray to Map questions 
        questionsArray.forEach(questions => this.questions.set(question.questionId, question.question.answer));
        this.students = students;
    }

    scoreStudent(studentId) {
        //todo: compte student score based on answers
        let student = this.students.filter(student => student.studentId === studentId)[0];
        return student.answers.reduce((sum, currentQuestion) => {
            let questionId = currentQuestion.questionId;//find question id
            let correctAnswer = this.questions.get(questionId); //get correctAnswer from Map
            let result = currentQuestionc.checkAnswer(correctAnswer); //compare currentQuestion answer with correctAnswer
            if (result) {
                sum = sum + 1;
            }
            return sum;

        }, 0);
    }

    getAverageScore() {
        //todo: compte average score based on answers for all students
        return this.students.reduce((average, currentStudent, index, arr) => average + this.scoreStudent(currentStudent.studentId) / arr.length, 0);
    }
}

const questionsArraywithCorrectAnswers = [new Question(1, 'a'), new Question(2, 'b'), new Question(3, 'c')];
const students = [];
