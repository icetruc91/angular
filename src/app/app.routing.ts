import { Routes, RouterModule} from "@angular/router";
import {WhiteBoardComponent} from "./white-board/white-board.component";
import {CourseViewerComponent} from "./course-viewer/course-viewer.component";
import  {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {SectionComponent} from "./section/section.component";
import {QuizListComponent} from "./quiz-list/quiz-list.component";
import {QuizTakerComponent} from "./quiz-taker/quiz-taker.component";
import {QuizSubmissionComponent} from "./quiz-submission/quiz-submission.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WhiteBoardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'quizzes', component: QuizListComponent},
  {path: 'quiz/:quizId', component: QuizTakerComponent},
  {path: 'quiz/:quizId/submit/', component: QuizSubmissionComponent},
  {path: 'course/:courseId', component: CourseViewerComponent},
  {path: 'course/:courseId/section', component: SectionComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent},
  {path: '**', component: WhiteBoardComponent},


];

export const routing = RouterModule.forRoot(appRoutes);
