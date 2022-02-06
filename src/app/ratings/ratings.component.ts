import { onetofive } from './../data/data-type';
import { Component, OnInit } from '@angular/core';
import { quizzes } from '../data/examples-quiz';
import { rateScore, Rating } from '../data/data-type';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.less'],
})
export class RatingsComponent implements OnInit {
  id: any = 1;
  List: Array<Rating> = quizzes[this.id].rating;

  commentForm: rateScore = {
    author: '',
    comment: '',
    rate: 1,
  };
  getStars(r: number) {
    this.commentForm.rate = r;
  }
  send() {
    console.log(this.commentForm);
    this.List.unshift(this.commentForm);
  }
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.List = quizzes[this.id].rating;
  }
}
