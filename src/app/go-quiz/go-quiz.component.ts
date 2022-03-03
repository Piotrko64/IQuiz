import { ServiceQueService } from './../services/service-que.service';

import { Component, OnInit } from '@angular/core';
import { Questions } from '../data/data-type';

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
  List: Array<Questions> = this.http.ActualQuizzes[this.id].questions;
  quizMeta = this.http.ActualQuizzes[this.id].meta;
  arrayAction = ['play', 'ratings'];
  Action: string = 'play';

  constructor(private route: ActivatedRoute, private http: ServiceQueService) {}
  // get data
  get() {
    this.http.getQuizzes().subscribe();
  }
  // change playActive

  ngOnInit(): void {
    window.scroll(0, 0);

    // Id of subpage
    this.id = this.route.snapshot.paramMap.get('id');
    this.List = this.http.ActualQuizzes[this.id].questions;
    this.quizMeta = this.http.ActualQuizzes[this.id].meta;
  }
}
