import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent implements OnInit {
  @Output() valEmitter = new EventEmitter<number>();
  interval: number | ReturnType<typeof setTimeout> = null;
  isCountdown: boolean = false;
  val: number = 0;

  constructor() {}

  ngOnInit(): void {}

  startCountdown(): void {
    if (!this.isCountdown) {
      this.isCountdown = true;
      this.interval = setInterval(() => {
        this.valEmitter.emit(this.val);
        this.val += 1;
      }, 1000);
    }
  }

  stopCountdown(): void {
    if (this.isCountdown) {
      this.isCountdown = false;
      clearInterval(this.interval);
    }
  }
}
