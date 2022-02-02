import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.less'],
})
export class CreatingComponent implements OnInit {
  constructor() {}
  arrayAmountQue = [1, 2, 3];
  ngOnInit(): void {}
}
