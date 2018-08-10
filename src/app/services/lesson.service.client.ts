

export class LessonServiceClient {

  findLessonsForModule(moduleId) {
    return fetch('hhttps://webdev-nodejs-madness.herokuapp.com/api/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
