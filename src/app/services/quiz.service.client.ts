import {Injectable} from "@angular/core";


@Injectable()
export class QuizServiceClient {
  createQuiz(quiz) {
  }


  submitQuiz =  quiz =>
    fetch('http://localhost:3000/api/quiz/' + quiz._id + '/submission', {
      method: 'post',
      body: JSON.stringify(quiz),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(response => response.json());

  findAllQuizzes() {
    console.log('find all quizzes in quiz.service.client');
    return fetch('http://localhost:3000/api/quiz')
      .then(response => response.json());
  };

  findQuizById(quizId) {
    console.log('find all quizzes in quiz.service.client');
    return fetch('http://localhost:3000/api/quiz/' + quizId)
      .then(response => response.json());
  };


  updateQuiz(quizId, quiz) {
  }

  deleteQuiz(quizId) {
  }
}

