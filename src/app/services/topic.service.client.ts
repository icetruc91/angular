export class TopicServiceClient {


  findTopicsForLessons(lessonId) {
    return fetch('https://localhost:8080/api/lesson/' + lessonId + '/topic')
      .then(response => response.json());

  }
}
