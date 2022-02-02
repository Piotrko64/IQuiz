import { Component, OnInit } from '@angular/core';
import { Questions } from '../data/data-type';
import { quizzes } from '../data/examples-quiz';
import { ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-go-quiz',
  templateUrl: './go-quiz.component.html',
  styleUrls: ['./go-quiz.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class GoQuizComponent implements OnInit {
  id: any = 1;
  List: Array<Questions> = quizzes[this.id].questions;
  quizMeta = quizzes[this.id].meta;
  playActive = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(quizzes[this.id].questions);
    // Id of subpage
    this.id = this.route.snapshot.paramMap.get('id');
    this.List = quizzes[this.id].questions;
    this.quizMeta = quizzes[this.id].meta;
  }
}
