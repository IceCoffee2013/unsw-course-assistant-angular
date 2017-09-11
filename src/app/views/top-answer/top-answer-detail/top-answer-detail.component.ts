import {Component, OnInit} from "@angular/core";
import {Question} from "../../../models/top-answer/question-model";
import {Answer} from "../../../models/top-answer/answer-model";
import {QuestionService} from "../../../services/top-answer/question-service";
import {AnswerService} from "../../../services/top-answer/answer-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-top-answer-detail',
  templateUrl: './top-answer-detail.component.html',
  styleUrls: ['./top-answer-detail.component.scss']
})
export class TopAnswerDetailComponent implements OnInit {

  public commentType:string = "answer";
  public editorData;
  public question: Question = new Question();
  public answers: Answer[];

  constructor(public questionService: QuestionService,
              public answerService: AnswerService,
              public activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        let questionId: string = params["id"];
        this.loadQuestion(questionId);
        this.loadAnswerList(questionId);
      }
    );
  }

  public loadQuestion(questionId: string) {
    this.questionService
      .getQuestion(questionId)
      .subscribe(
        data => this.question = data,
        error => console.error(error)
      );
  }

  public loadAnswerList(questionId: string) {
    this.answerService
      .getAnswerList(questionId)
      .subscribe(
        data => this.answers = data,
        error => console.error(error)
      );
  }

  public showComment(answer: Answer) {
    answer.isShowComment = !answer.isShowComment;
  }

  // public showComment

  public doUp(answer: Answer) {

    if (answer.isUp) {
      // cancel like
      answer.isUp = false;
      answer.likes -= 1;
      this.answerService.doLike(answer);
    } else {
      // do like
      answer.isUp = true;
      answer.isDown = false;
      answer.likes += 1;
      this.answerService.doLike(answer);
    }
  }

  public doDown(answer: Answer) {
    if (answer.isDown) {
      // cancel down
      answer.isDown = false;
      answer.likes += 1;
      this.answerService.doLike(answer);
    } else {
      // do down
      answer.isDown = true;
      answer.isUp = false;
      answer.likes -= 1;
      this.answerService.doLike(answer);
    }
  }

  public onEditorCreated() {

  }

  public onContentChanged({
    editor, html, text, source
  }) {
    // console.log('change', html);
    // console.log('text', text);
    // console.log('source', source);

  }

  public onSelectionChanged({editor, range, oldRange, source}) {
    // console.log('select', source);
    // console.log('select', range);
    // console.log('select', oldRange);
    // console.log('select', editor);

  }

}
