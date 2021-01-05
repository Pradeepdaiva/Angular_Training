import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureSectionComponent } from './culture-section.component';

describe('CultureSectionComponent', () => {
  let component: CultureSectionComponent;
  let fixture: ComponentFixture<CultureSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultureSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
