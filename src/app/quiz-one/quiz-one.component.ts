import { quizzes } from './../data/examples-quiz';
import { ViewEncapsulation } from '@angular/core';
import { Questions } from 'src/app/data/data-type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-one',
  templateUrl: './quiz-one.component.html',
  styleUrls: ['./quiz-one.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class QuizOneComponent implements OnInit {
  List: Array<Questions> = quizzes[0].questions;
  quizMeta = quizzes[0].meta;
  arrayAnswers: Array<string> = [];
  arrayCorrect: Array<string> = [];
  arrayChecking: Array<string | boolean> = [];
  Counting: number = 0;
  constructor() {}
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
    console.log('pkt', this.Counting);
    this.SwapAns();
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
    // Array with good answers
    this.Reordering();
  }
}
