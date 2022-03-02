import { Quiz } from './../data/data-type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { quizzes } from '../data/examples-quiz';

@Injectable({
  providedIn: 'root',
})
export class ServiceQueService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.url + '/quiezzes').pipe(tap(console.log));
  }
  ActualQuizzes: Quiz[] = [...quizzes];
  getLocalQuizzes(): Array<Quiz> {
    return this.ActualQuizzes;
  }
}
