import { StartComponent } from './pages/start/start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuizOneComponent } from './quiz-one/quiz-one.component';
import { CreatingComponent } from './creating/creating.component';
const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'quiz-one/1', component: QuizOneComponent },
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
