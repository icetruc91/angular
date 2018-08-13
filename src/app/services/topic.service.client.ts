export class TopicServiceClient {


  findTopicsForLessons(lessonId) {
    return fetch('http://localhost:3000/api/lesson/' + lessonId + '/topic')
      .then(response => response.json());

  }
}
