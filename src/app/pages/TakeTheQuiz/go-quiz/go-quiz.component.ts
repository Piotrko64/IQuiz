import { Quiz } from './../../../data/data-type';
import { ServiceQueService } from '../../../services/service-que.service';

import { Component, OnInit } from '@angular/core';
import { Questions } from '../../../data/data-type';

import { ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-go-quiz',
  templateUrl: './go-quiz.component.html',
  styleUrls: ['./go-quiz.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class GoQuizComponent implements OnInit {
  id: string = this.route.snapshot.paramMap.get('id')!;
  thisQuiz: Quiz = this.http.ActualQuizzes.filter(
    (e) => e.meta.id === this.id
  )[0];
  List: Array<Questions> = this.thisQuiz.questions;
  quizMeta = this.thisQuiz.meta;
  arrayAction = ['play', 'ratings'];
  Action: string = 'play';

  constructor(private route: ActivatedRoute, private http: ServiceQueService) {}
  // get data
  get() {
    this.http.getQuizzes().subscribe();
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
