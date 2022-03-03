import { Questions } from './../data/data-type';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { ServiceQueService } from '../services/service-que.service';
@Component({
  selector: 'app-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.less'],
})
export class CreatingComponent implements OnInit {
  constructor(private service: ServiceQueService) {}
  arrayAmountQue = [1, 2, 3];
  levels = ['easy', 'medium', 'hard'];
  newQuiz = './quiz-one/' + this.service.ActualQuizzes.length;
  oneQue = {
    question: '',
    answers: ['', '', '', ''],
    correct: '',
    image: '',
  };
  baseData: any = {
    author: 'Your nick',
    title: 'Title',
    image: '',
    describe: 'Write short describe!',
    date: '01/02/2019',
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
  addContainer() {
    this.ListQues.push(this.oneQue);
    setTimeout(() => {
      window.scrollBy({
        top: 500,
        behavior: 'smooth',
      });
    }, 50);
  }
  download(content: any, fileName: any, contentType: any) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  jsonFile() {
    this.download(
      JSON.stringify(this.Alldata),
      'YourJSONQuiz.json',
      'text/plain'
    );
  }
  pushQuiz() {
    this.service.ActualQuizzes.push(this.Alldata);
    console.log(this.Alldata);
    console.log(this.service.ActualQuizzes);
    alert('Quiz is added! Come to HomePage!');
    window.scroll(0, 0);
  }
  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
