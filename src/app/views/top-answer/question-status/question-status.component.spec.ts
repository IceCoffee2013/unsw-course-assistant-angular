import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionStatusComponent } from './question-status.component';

describe('QuestionStatusComponent', () => {
  let component: QuestionStatusComponent;
  let fixture: ComponentFixture<QuestionStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
