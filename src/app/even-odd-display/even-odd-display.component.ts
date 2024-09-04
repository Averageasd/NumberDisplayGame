import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-odd-display',
  templateUrl: './even-odd-display.component.html',
  styleUrl: './even-odd-display.component.css',
})
export class EvenOddDisplayComponent implements OnInit {
  @Input() num: number;

  constructor() {}
  ngOnInit(): void {}

  isEvenNumber(): boolean {
    return this.num % 2 == 0;
  }
}
