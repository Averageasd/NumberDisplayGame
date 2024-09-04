import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'NumberCounterInterval';
  numbers: number[] = [];
  constructor() {}

  ngOnInit(): void {}

  onCountDownSetValue(val: number) {
    this.numbers.push(val);
  }
}
