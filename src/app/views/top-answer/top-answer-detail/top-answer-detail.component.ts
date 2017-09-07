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

  public question: Question;
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

}
