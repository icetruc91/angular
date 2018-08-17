import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseServiceClient} from './services/course.service.client';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {routing} from "./app.routing";
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from "./services/module.service.client";
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from "./services/lesson.service.client";
import { TopicListComponent } from './topic-list/topic-list.component';
import {TopicServiceClient} from "./services/topic.service.client";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule} from "@angular/forms";
import {UserServiceClient} from "./services/user.service.client";
import { AdminComponent } from './admin/admin.component';
import { SectionComponent } from './section/section.component';
import {SectionServiceClient} from "./services/section.service.client";
import { WidgetsComponent } from './widgets/widgets.component';
import {WidgetServiceClient} from "./services/widget.service.client";
import { QuizListComponent } from './quiz-list/quiz-list.component';
import {QuizServiceClient} from "./services/quiz.service.client";
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { FillBlanksQuestionComponent } from './fill-blanks-question/fill-blanks-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { EssayQuestionComponent } from './essay-question/essay-question.component';
import { QuizSubmissionComponent } from './quiz-submission/quiz-submission.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicListComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminComponent,
    SectionComponent,
    WidgetsComponent,
    QuizListComponent,
    QuizTakerComponent,
    TrueFalseQuestionComponent,
    FillBlanksQuestionComponent,
    MultipleChoiceQuestionComponent,
    EssayQuestionComponent,
    QuizSubmissionComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    SectionServiceClient,
    UserServiceClient,
    WidgetServiceClient,
    QuizServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
