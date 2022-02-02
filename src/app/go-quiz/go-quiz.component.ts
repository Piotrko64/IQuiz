import { ServiceQueService } from './../services/service-que.service';

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
  arrayAction = ['play', 'ratings', 'score'];
  Action: string = 'play';

  constructor(private route: ActivatedRoute, private http: ServiceQueService) {}
  // get data
  get() {
    this.http.getQuizzes().subscribe();
  }
  // change playActive

  ngOnInit(): void {
    this.get();

    this.id = this.route.snapshot.paramMap.get('id');

    // Id of subpage
    this.id = this.route.snapshot.paramMap.get('id');
    this.List = quizzes[this.id].questions;
    this.quizMeta = quizzes[this.id].meta;
  }
}
