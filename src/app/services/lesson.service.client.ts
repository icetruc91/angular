

export class LessonServiceClient {

  findLessonsForModule(moduleId) {
    return fetch('http://curt-java-server-5.herokuapp.com/api/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
