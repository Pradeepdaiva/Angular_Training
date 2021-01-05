import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistryFormComponent } from './user-registry-form.component';

describe('UserRegistryFormComponent', () => {
  let component: UserRegistryFormComponent;
  let fixture: ComponentFixture<UserRegistryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
