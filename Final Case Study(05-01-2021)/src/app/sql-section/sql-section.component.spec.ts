import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlSectionComponent } from './sql-section.component';

describe('SqlSectionComponent', () => {
  let component: SqlSectionComponent;
  let fixture: ComponentFixture<SqlSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
