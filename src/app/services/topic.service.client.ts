export class TopicServiceClient {


  findTopicsForLessons(lessonId) {
    return fetch('https://webdev-nodejs-madness.herokuapp.com/api/lesson/' + lessonId + '/topic')
      .then(response => response.json());

  }
}
