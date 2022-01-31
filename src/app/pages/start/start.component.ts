import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less'],
})
export class StartComponent implements OnInit {
  textShadow = '10px 10px 2px rgba(255, 255, 255, 0.158)';
  constructor() {}
  move(e: any) {
    this.textShadow = `${e.clientX / 30}px ${
      e.clientY / 20
    }px 2px rgba(255, 255, 255, 0.158)`;
  }
  ngOnInit(): void {}
}
