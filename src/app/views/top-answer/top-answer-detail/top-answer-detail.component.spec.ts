import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAnswerDetailComponent } from './top-answer-detail.component';

describe('TopAnswerDetailComponent', () => {
  let component: TopAnswerDetailComponent;
  let fixture: ComponentFixture<TopAnswerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAnswerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAnswerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
