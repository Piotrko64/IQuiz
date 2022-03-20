import { ServiceQueService } from '../../../services/service-que.service';
import { Quiz } from '../../../data/data-type';
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

  List = this.service.ActualQuizzes;

  copyList: Quiz[] = this.List;
  rate = [1, 2, 3, 4, 5];
  coloring = {
    easy: 'yellow',
    medium: 'orange',
    hard: 'red',
  };
  scrollUp() {
    window.scrollTo(0, 0);
  }

  CountRate(m: number) {
    let max = 0;
    for (let i = 0; i <= this.List[m].rating.length - 1; i++) {
      max = max + this.List[m].rating[i].rate;
    }
    let countRate: any = max / this.List[m].rating.length;

    return Math.ceil(countRate);
  }

  filter() {
    console.log(this.copyList);
    this.copyList = this.List.filter((f) => {
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
      if (this.binding == '') {
        return f;
      }
      return;
    });
  }

  ngOnInit(): void {
    this.copyList = this.List;

    this.CountRate(0);
  }
}
