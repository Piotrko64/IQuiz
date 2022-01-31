import { StartComponent } from './pages/start/start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizOneComponent } from './pages/quiz-one/quiz-one.component';
const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'quiz-one', component: QuizOneComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
