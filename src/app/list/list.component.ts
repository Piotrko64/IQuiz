import { Quiz } from './../data/data-type';
import { quizzes } from './../data/examples-quiz';
import { Component, OnInit } from '@angular/core';
import { Rating } from './../data/data-type';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent implements OnInit {
  constructor() {}
  rate = [1, 2, 3, 4, 5];
  coloring = {
    easy: 'yellow',
    medium: 'orange',
    hard: 'red',
  };
  CountRate() {
    let countIndex = this.List[0].rating.length;
    let countRate: any = this.List[0].rating.reduce((a, b): any => {
      return Number(a.rate + b.rate);
    });

    return Math.ceil(countRate / countIndex);
  }
  List: Array<Quiz> = quizzes;
  ngOnInit(): void {
    this.CountRate();
  }
}
