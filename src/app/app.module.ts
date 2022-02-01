import { QuizOneComponent } from './quiz-one/quiz-one.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartComponent } from './pages/start/start.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CreatingComponent } from './creating/creating.component';
import { GoQuizComponent } from './go-quiz/go-quiz.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ListComponent,
    QuizOneComponent,
    CreatingComponent,
    GoQuizComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
