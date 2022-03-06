import { Quiz } from './../../../data/data-type';
import { Component, OnInit } from '@angular/core';
import { rateScore, Rating } from '../../../data/data-type';
import { ActivatedRoute } from '@angular/router';
import { ServiceQueService } from '../../../services/service-que.service';
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.less'],
})
export class RatingsComponent implements OnInit {
  id: string = this.route.snapshot.paramMap.get('id')!;
  thisQuiz: Quiz = this.http.ActualQuizzes.filter(
    (e) => e.meta.id === this.id
  )[0];
  List: Array<Rating> = this.thisQuiz.rating;
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

    this.List.unshift(this.commentForm);
    this.isJustRate = true;
  }
  constructor(private route: ActivatedRoute, private http: ServiceQueService) {}

  ngOnInit(): void {}
}
