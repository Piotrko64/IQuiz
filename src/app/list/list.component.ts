import { Quiz } from './../data/data-type';
import { quizzes } from './../data/examples-quiz';
import { Component, Input, OnInit } from '@angular/core';
import { Rating } from './../data/data-type';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent implements OnInit {
  constructor() {}
  @Input()
  search!: boolean;
  binding = '';
  List: Array<Quiz> = quizzes;
  copyList = this.List;
  rate = [1, 2, 3, 4, 5];
  coloring = {
    easy: 'yellow',
    medium: 'orange',
    hard: 'red',
  };
  scrollUp() {
    window.scrollTo(0, 0);
  }
  // Counter diameter of rating
  CountRate(m: number) {
    let countIndex = this.List[m].rating.length;
    let countRate: any = this.List[m].rating.reduce((a, b): any => {
      return Number(a.rate + b.rate);
    });

    return Math.ceil(countRate / countIndex);
  }

  filter() {
    this.List = this.copyList.filter((f) => {
      if (
        f.meta.author.toUpperCase().indexOf(this.binding.toUpperCase()) !==
          -1 ||
        f.meta.title.toUpperCase().indexOf(this.binding.toUpperCase()) !== -1 ||
        f.meta.describe?.toUpperCase().indexOf(this.binding.toUpperCase()) !==
          -1 ||
        f.meta.levelDifficulty
          .toUpperCase()
          .indexOf(this.binding.toUpperCase()) !== -1
      ) {
        return f;
      }
      if (this.binding.length === 0) {
        return f;
      }
      return;
    });
  }

  ngOnInit(): void {
    console.log(this.search);
  }
}
