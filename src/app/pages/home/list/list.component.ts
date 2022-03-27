import { ServiceQueService } from '../../../services/service-que.service';
import { Quiz } from '../../../data/data-type';
import { ElementRef, ViewChild } from '@angular/core';
import { delay, of } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  animations: [
    trigger('fade', [
      state(
        'void',
        style({
          transform: `translateX(-100%)`,
        })
      ),
      transition('void=>*', [animate(500)]),
      transition('*=>void', [animate(300)]),
    ]),
  ],
})
export class ListComponent implements OnInit {
  constructor(private service: ServiceQueService) {}
  @Input()
  search!: boolean;
  binding = '';

  List = this.service.ActualQuizzes;
  bind$ = new Subject();
  filterList$ = of(this.List);

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

  filter(s: Event) {
    const target = s.target as HTMLInputElement;
    this.bind$.next(target.value);
  }

  ngOnInit(): void {
    this.bind$.pipe(delay(300)).subscribe({
      next: (e: any) => {
        this.filterList$ = of(
          this.List.filter((f) => {
            const { author, title, describe, levelDifficulty } = f.meta;
            if (
              author.toUpperCase().indexOf(e.toUpperCase()) !== -1 ||
              title.toUpperCase().indexOf(e.toUpperCase()) !== -1 ||
              describe?.toUpperCase().indexOf(e.toUpperCase()) !== -1 ||
              levelDifficulty.toUpperCase().indexOf(e.toUpperCase()) !== -1
            ) {
              return f;
            }
            if (e == '') {
              return f;
            }
            return;
          })
        );
      },
    });

    this.CountRate(0);
  }
}
