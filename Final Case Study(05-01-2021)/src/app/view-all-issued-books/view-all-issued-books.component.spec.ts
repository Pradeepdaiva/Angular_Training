import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllIssuedBooksComponent } from './view-all-issued-books.component';

describe('ViewAllIssuedBooksComponent', () => {
  let component: ViewAllIssuedBooksComponent;
  let fixture: ComponentFixture<ViewAllIssuedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllIssuedBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllIssuedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
