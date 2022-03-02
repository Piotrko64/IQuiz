import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.less'],
})
export class CreatingComponent implements OnInit {
  constructor() {}
  arrayAmountQue = [1, 2, 3];
  tak = '';
  baseData = {
    author: '',
    title: '',
    image: '',
    describe: '',
    levelDifficulty: 'easy',
  };
  ListQues = [
    {
      question: '',
      answers: ['', '', '', ''],
      correct: '',
    },
    {
      question: '',
      answers: ['', '', '', ''],
      correct: '',
    },
  ];

  console() {
    console.log(this.ListQues);
    console.log(JSON.stringify(this.ListQues));
  }
  ngOnInit(): void {}
}
