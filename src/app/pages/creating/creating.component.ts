import { Questions } from '../../data/data-type';
import { Component, OnInit } from '@angular/core';
import { ServiceQueService } from '../../services/service-que.service';
@Component({
  selector: 'app-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.less'],
})
export class CreatingComponent implements OnInit {
  constructor(private service: ServiceQueService) {}
  arrayAmountQue = [1, 2, 3];
  levels = ['easy', 'medium', 'hard'];
  newDate = new Date();
  checking = false;

  oneQue = {
    question: '',
    answers: ['', '', '', ''],
    correct: '',
    image: '',
  };
  baseData: any = {
    id: ``,
    author: 'Your nick',
    title: 'Title',
    image: '',
    describe: 'Write short describe!',
    date: `${this.newDate.getDate()}/${this.newDate.getMonth()}/${this.newDate.getFullYear()}`,
    levelDifficulty: 'easy',
  };
  ListQues: Questions[] = [
    {
      question: '',
      answers: ['', '', '', ''],
      correct: '',
      image: '',
    },
    {
      question: '',
      answers: ['', '', '', ''],
      correct: '',
      image: '',
    },
    {
      question: '',
      answers: ['', '', '', ''],
      correct: '',
      image: '',
    },
  ];
  Alldata = {
    meta: this.baseData,
    questions: this.ListQues,
    rating: [],
    score: [],
  };
  link = `/quiz-one/${this.baseData.id}`;
  addContainer() {
    this.ListQues.push(this.oneQue);
    setTimeout(() => {
      window.scrollBy({
        top: 500,
        behavior: 'smooth',
      });
    }, 50);
  }
  receiveId() {
    this.baseData.id =
      this.baseData.title[0] +
      this.newDate.getTime() +
      this.baseData.levelDifficulty[0] +
      Math.round(Math.random() * 999);
  }
  download(content: any, fileName: any, contentType: any) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
  Valid(e: any): boolean {
    if (e.invalid) {
      alert('Oops... Remember about base informations');
      return false;
    } else if (this.ListQues.some((e) => e.answers.indexOf('') !== -1)) {
      alert('Remember about all answers!!!');
      this.checking = true;
      return false;
    } else if (this.validButtons() === false) {
      alert('Check if you have marked the correct answer everywhere');
      return false;
    }
    return true;
  }
  jsonFile(e: any) {
    this.receiveId();
    if (this.Valid(e)) {
      this.download(
        JSON.stringify(this.Alldata),
        'YourJSONQuiz.json',
        'text/plain'
      );
    }
  }
  validButtons() {
    return this.ListQues.every(
      ({ answers, correct }) =>
        correct !== '' && answers.indexOf(correct) !== -1
    );
  }
  colorBorder(answer: string, correct: string) {
    if (correct === answer && answer) {
      return '#2ced2c';
    } else {
      return 'white';
    }
  }

  pushQuiz(e: any) {
    this.receiveId();
    if (this.Valid(e)) {
      this.service.ActualQuizzes.push(this.Alldata);
      console.log(this.link);
      alert('Quiz is added! Let`s go!');
      window.scroll(0, 0);
    }
  }
  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
