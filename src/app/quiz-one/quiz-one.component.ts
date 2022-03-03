import { ActivatedRoute } from '@angular/router';
import { quizzes } from './../data/examples-quiz';
import { Input, ViewEncapsulation } from '@angular/core';
import { Questions } from 'src/app/data/data-type';
import { Component, OnInit } from '@angular/core';
import { ServiceQueService } from '../services/service-que.service';
// Animation
import { HostBinding } from '@angular/core';
import {
  trigger,
  state,
  keyframes,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-quiz-one',
  templateUrl: './quiz-one.component.html',
  styleUrls: ['./quiz-one.component.less'],
  encapsulation: ViewEncapsulation.None,
  // animations: [
  //   trigger('openClose', [
  //     transition('closed => open', [
  //       animate(
  //         '4s',
  //         keyframes([
  //           style({ opacity: 1 }),
  //           style({ transform: 'translate(0px)' }),
  //         ])
  //       ),
  //     ]),
  //     transition('open => closed', [
  //       animate(
  //         '4s',
  //         keyframes([
  //           style({ transform: 'translateY(300px)', offset: 0.5 }),
  //           style({ opacity: 0, offset: 0.8 }),
  //           style({ display: 'none', offset: 1 }),
  //         ])
  //       ),
  //     ]),
  //   ]),
  // ],
})
export class QuizOneComponent implements OnInit {
  isOpen = false;

  id: any = this.route.snapshot.paramMap.get('id');
  List: Array<Questions> = this.service.ActualQuizzes[this.id].questions;
  quizMeta = this.service.ActualQuizzes[this.id].meta;
  arrayAnswers: Array<string> = [];
  arrayCorrect: Array<string> = [];
  Counting: number = 0;
  procentCounting: number | string = 0;
  disabled = false;
  constructor(
    private route: ActivatedRoute,
    private service: ServiceQueService
  ) {}
  // PUSH TO ARRAY
  push(ans: string, i: number) {
    this.arrayAnswers[i] = ans;
    // console.log(this.List.length);
  }
  // Swap the answers
  SwapAns() {
    for (let s = 0; s < this.List.length; s++) {
      const random1 = Math.floor(Math.random() * 3);
      const random2 = Math.floor(Math.random() * 3);
      const swapAns = this.List[s].answers[random1];
      this.List[s].answers[random1] = this.List[s].answers[random2];
      this.List[s].answers[random2] = swapAns;
      console.log(random1, random2);
    }
  }
  // reordering of questions

  Reordering() {
    this.List = this.List.map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
  //Function to create array with good answers
  correct() {
    for (let i = 0; i < this.List.length; i++) {
      const newPush = this.List[i].correct;
      this.arrayCorrect.push(newPush);
    }
    return this.arrayCorrect;
  }
  // Coloring Questions
  coloringQue(a: string, b: string) {
    if (this.disabled === false) {
      return 'white';
    }
    if (a === b) {
      return 'green';
    }
    if (a !== b) {
      return 'red';
    }
    return;
  }
  // Check good answers and counting point
  Check() {
    this.correct();
    for (let j = 0; j < this.List.length; j++) {
      if (this.arrayAnswers[j] === this.arrayCorrect[j]) {
        this.Counting++;
      } else {
        console.log('No! Good answer is ' + this.arrayCorrect[j]);
      }
    }
    this.procentCounting = (
      (this.Counting / this.arrayCorrect.length) *
      100
    ).toFixed(2);
    this.disabled = true;
    setTimeout(() => {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }, 100);
  }
  // Notification about amount points
  giveCount() {
    const count = (this.Counting / this.arrayCorrect.length) * 100;
    if (count > 80) {
      return 'Awesome! You got ' + this.Counting + ' points!';
    }
    if (count > 45) {
      return 'Not Bad! You got ' + this.Counting + ' points!';
    }
    if (count > 0) {
      return 'Ooops..! You got only ' + this.Counting + ' points';
    } else {
      return 'Zero points!';
    }
  }
  // Play again
  again() {
    this.arrayAnswers = [];
    this.arrayCorrect = [];
    this.Counting = 0;
    this.procentCounting = 0;
    this.disabled = false;
    this.Reordering();
    this.SwapAns();
    window.scrollTo(0, 0);
  }
  // Coloring good and bad answer
  getColor(btn: string, answer: string, correct: string): any {
    if (btn === correct) {
      return 'green';
    }
    if (btn === answer && btn !== correct && correct !== undefined) {
      return 'red';
    }
    if (btn === answer) {
      return '#d9008f';
    }
  }
  ngOnInit(): void {
    // Id of subpage
    console.log();
    this.List = this.service.ActualQuizzes[this.id].questions;
    this.id = this.route.snapshot.paramMap.get('id');

    this.quizMeta = this.service.ActualQuizzes[this.id].meta;
    console.log(this.List);
    this.SwapAns();
    this.Reordering();
  }
}
