import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../../models/top-answer/question-model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuestionService} from "../../../services/top-answer/question-service";

@Component({
  selector: 'app-admin-question-detail',
  templateUrl: './admin-question-detail.component.html',
  styleUrls: ['./admin-question-detail.component.css']
})
export class AdminQuestionDetailComponent implements OnInit {

  @Input() question: Question;
  questionForm: FormGroup;

  public questionList: Array<Question>;

  constructor(private fb: FormBuilder,
              public questionService: QuestionService ) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.questionForm.reset({
      id: this.question.id,
      title: this.question.title,
      author: this.question.author,
      description: this.question.description,
      postTime: this.question.postTime
    });
  }

  createForm() {
    this.questionForm = this.fb.group({
      id: ['', Validators.required],
      title: '',
      author: '',
      description: '',
      postTime: '',
    });
  }
  submit = false;
  onSubmit() {
    this.question = this.prepareSaveQuestion();
    this.submit = true;
  }
  prepareSaveQuestion(){
    const formModel = this.questionForm.value;
    const questionDeepCopy: Question[] = formModel.questionList.map(
      (question: Question) => {
        Object.assign({}, question)
      }
    );
    const saveQuestion: Question = {
      id: this.question.id,
      title: this.question.title,
      author: this.question.author,
      description: this.question.description,
      postTime: this.question.postTime,
      tags: this.question.tags
    };
    return saveQuestion;
  }
  revert() { this.ngOnChanges(); }
}
