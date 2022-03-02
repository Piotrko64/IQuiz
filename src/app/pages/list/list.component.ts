import { ServiceQueService } from '../../services/service-que.service';
import { Quiz } from '../../data/data-type';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent implements OnInit {
  constructor(private service: ServiceQueService) {}
  @Input()
  search!: boolean;
  binding = '';
  List: Array<Quiz> = [];
  getList(): void {
    this.List = this.service.ActualQuizzes;
    console.log(this.List[0].rating);
  }

  copyList = [...this.List];
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
    console.log(this.List);
    let max = 0;
    for (let i = 0; i <= this.List[m].rating.length - 1; i++) {
      max = max + this.List[m].rating[i].rate;
    }
    let countRate: any = max / this.List[m].rating.length;

    return Math.ceil(countRate);
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
    this.getList();
    this.CountRate(0);
  }
}
