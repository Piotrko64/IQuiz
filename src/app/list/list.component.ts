import { Quiz } from './../data/data-type';
import { quizzes } from './../data/examples-quiz';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent {
  constructor() {}
  coloring = {
    easy: 'yellow',
    medium: 'orange',
    hard: 'red',
  };
  List: Array<Quiz> = quizzes;
}
