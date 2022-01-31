import { quizzes } from '../data/examples-quiz';
import { Quiz } from 'src/app/data/data-type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-one',
  templateUrl: './quiz-one.component.html',
  styleUrls: ['./quiz-one.component.less'],
})
export class QuizOneComponent implements OnInit {
  List: Quiz = quizzes[0];

  constructor() {}

  ngOnInit(): void {}
}
