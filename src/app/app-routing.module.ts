import { StartComponent } from './pages/home/start/start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoQuizComponent } from './pages/takeTheQuiz/go-quiz/go-quiz.component';
import { CreatingComponent } from './pages/creating/creating.component';
const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'quiz-one/:id', component: GoQuizComponent },
  { path: 'creating', component: CreatingComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
