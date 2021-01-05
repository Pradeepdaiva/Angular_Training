import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsSectionComponent } from './maths-section.component';

describe('MathsSectionComponent', () => {
  let component: MathsSectionComponent;
  let fixture: ComponentFixture<MathsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
