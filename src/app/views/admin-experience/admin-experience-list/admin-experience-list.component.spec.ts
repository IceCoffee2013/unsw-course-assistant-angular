import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExperienceListComponent } from './admin-experience-list.component';

describe('AdminExperienceListComponent', () => {
  let component: AdminExperienceListComponent;
  let fixture: ComponentFixture<AdminExperienceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExperienceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
