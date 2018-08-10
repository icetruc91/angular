import {Injectable} from '@angular/core';


@Injectable()
export class CourseServiceClient {
  COURSE_URL ='https://webdev-nodejs-madness.herokuapp.com/course';
  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }

  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }
}
