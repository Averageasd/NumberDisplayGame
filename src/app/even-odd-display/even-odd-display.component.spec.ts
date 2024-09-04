import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenOddDisplayComponent } from './even-odd-display.component';

describe('EvenOddDisplayComponent', () => {
  let component: EvenOddDisplayComponent;
  let fixture: ComponentFixture<EvenOddDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvenOddDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenOddDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
