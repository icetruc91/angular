export class TopicServiceClient {


  findTopicsForLessons(lessonId) {
    return fetch('https://webdev-madness.herokuapp.com/api/lesson/' + lessonId + '/topic')
      .then(response => response.json());

  }
}
