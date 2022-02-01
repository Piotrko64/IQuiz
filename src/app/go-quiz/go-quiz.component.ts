import { Component, OnInit } from '@angular/core';
import { Questions } from '../data/data-type';
import { quizzes } from '../data/examples-quiz';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-go-quiz',
  templateUrl: './go-quiz.component.html',
  styleUrls: ['./go-quiz.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class GoQuizComponent implements OnInit {
  List: Array<Questions> = quizzes[0].questions;
  quizMeta = quizzes[0].meta;
  playActive = false;
  constructor() {}

  ngOnInit(): void {}
}
