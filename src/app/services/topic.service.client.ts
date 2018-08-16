export class TopicServiceClient {


  findTopicsForLessons(lessonId) {
    return fetch('https://curt-java-server-5.herokuapp.com/api/lesson/' + lessonId + '/topic')
      .then(response => response.json());

  }
}
