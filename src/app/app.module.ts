import { RatingsComponent } from './pages/takeTheQuiz/ratings/ratings.component';

import { QuizOneComponent } from './pages/takeTheQuiz/quiz-one/quiz-one.component';
import { ListComponent } from './pages/home/list/list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartComponent } from './pages/home/start/start.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CreatingComponent } from './pages/creating/creating.component';
import { GoQuizComponent } from './pages/takeTheQuiz/go-quiz/go-quiz.component';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ListComponent,
    QuizOneComponent,
    CreatingComponent,
    GoQuizComponent,

    RatingsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    MatButtonToggleModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
