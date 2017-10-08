import {Component, OnInit} from "@angular/core";
import {Question} from "../../../models/top-answer/question-model";
import {Answer} from "../../../models/top-answer/answer-model";
import {QuestionService} from "../../../services/top-answer/question-service";
import {AnswerService} from "../../../services/top-answer/answer-service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../models/user/user-model";

@Component({
  selector: 'app-top-answer-detail',
  templateUrl: './top-answer-detail.component.html',
  styleUrls: ['./top-answer-detail.component.scss']
})
export class TopAnswerDetailComponent implements OnInit {

  public commentType:string = "answer";
  public editorData: string = "";
  public question: Question = new Question();
  public answers: Answer[];
  public user: User;

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
    if (localStorage.getItem("currentUser") && JSON.parse(localStorage.getItem("currentUser"))) {
      this.user = JSON.parse(localStorage.getItem("currentUser"));
    }
  }

  public loadQuestion(questionId: string) {
    this.questionService
      .getQuestion(questionId)
      .subscribe(
        data => {
          this.question = data;
          console.log("load question", data);
        },
        error => {
          console.error(error);
        }
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

  public addAnswer() {
    let ans = new Answer();
    ans.author = this.user.username;
    ans.content = this.editorData;
    ans.questionId = this.question.id;
    this.answerService.addAnswer(ans).subscribe(
      data => {
        console.log("ans", data);
        this.loadAnswerList(this.question.id);
      },
      err => {
        console.log("add answer err", err);
      }
    );
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
