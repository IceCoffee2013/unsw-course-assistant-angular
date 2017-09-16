import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuestionDetailComponent } from './admin-question-detail.component';

describe('AdminQuestionDetailComponent', () => {
  let component: AdminQuestionDetailComponent;
  let fixture: ComponentFixture<AdminQuestionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuestionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuestionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
