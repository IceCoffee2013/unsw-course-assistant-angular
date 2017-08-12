import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChatsComponent } from './app-chats.component';

describe('AppChatsComponent', () => {
  let component: AppChatsComponent;
  let fixture: ComponentFixture<AppChatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppChatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
