import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistryFormComponent } from './admin-registry-form.component';

describe('AdminRegistryFormComponent', () => {
  let component: AdminRegistryFormComponent;
  let fixture: ComponentFixture<AdminRegistryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegistryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegistryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
