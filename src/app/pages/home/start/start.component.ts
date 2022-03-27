import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceQueService } from 'src/app/services/service-que.service';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less'],
})
export class StartComponent {
  textShadow = '10px 10px 2px rgba(255, 255, 255, 0.158)';
  search = false;
  constructor(private service: ServiceQueService) {}
  move(e: any) {
    this.textShadow = `${e.clientX / 30}px ${
      e.clientY / 20
    }px 2px rgba(255, 255, 255, 0.158)`;
  }
  @ViewChild('scroll', { read: ElementRef }) scroll: ElementRef | undefined;
  searching(e: any) {
    this.search = true;
    const input = document.querySelector(
      '.article__search'
    ) as HTMLInputElement;
    input.focus();
    this.scroll?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  lengthofList = this.service.ActualQuizzes.length;
  randomLinkQuiz =
    './quiz-one/' +
    this.service.ActualQuizzes[Math.floor(Math.random() * this.lengthofList)]
      .meta.id;
}
