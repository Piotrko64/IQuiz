import { onetofive } from './../data/data-type';
import { Component, OnInit } from '@angular/core';
import { quizzes } from '../data/examples-quiz';
import { rateScore, Rating } from '../data/data-type';
import { ActivatedRoute } from '@angular/router';
import { ServiceQueService } from '../services/service-que.service';
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.less'],
})
export class RatingsComponent implements OnInit {
  id: any = 1;
  List: Array<Rating> = this.http.ActualQuizzes[this.id].rating;
  isJustRate = false;
  commentForm: rateScore = {
    author: '',
    comment: '',
    rate: 3,
  };
  getStars(r: number) {
    this.commentForm.rate = r;
  }
  send() {
    if (
      this.commentForm.author.length < 4 &&
      this.commentForm.comment.length < 4
    ) {
      alert('Too short comment and name of author');
      return;
    }
    console.log(this.List);
    this.List.unshift(this.commentForm);
    this.isJustRate = true;
    console.log(this.http.ActualQuizzes[this.id].rating[0].rate);
  }
  constructor(private route: ActivatedRoute, private http: ServiceQueService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.List = quizzes[this.id].rating;
  }
}
