import {Component, OnInit} from "@angular/core";
import {Question} from "../../../models/top-answer/question-model";
import {QuestionService} from "../../../services/top-answer/question-service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-question-list',
  templateUrl: './admin-question-list.component.html',
  styleUrls: ['./admin-question-list.component.scss']
})
export class AdminQuestionListComponent implements OnInit {


  public itemsPerPage: number = 8;
  public pageSizeOptions = [8, 16, 24];
  public totalItems: number;
  //不要手动对这个属性进行赋值，它是和分页工具条自动绑定的
  public currentPage: number = 1;

  public searchText: string;
  // public searchTextStream: Subject<string> = new Subject<string>();

  public questionList: Array<Question>;

  constructor(public questionService: QuestionService,
              public router: Router,
              public activeRoute: ActivatedRoute,) {
  }


  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      // 这里可以从路由里面获取URL参数
      console.log(params);
      this.loadData(this.searchText, this.currentPage);
    });
  }

  public loadData(searchText: string, page: number) {
    let offset = (this.currentPage - 1) * this.itemsPerPage;
    let end = (this.currentPage) * this.itemsPerPage;

    console.log(searchText, page);

    return this.questionService.getQuestionList(searchText, page).subscribe(
      res => {
        this.totalItems = res.length;
        //TODO.正式环境中，需要去掉slice
        this.questionList = res.slice(offset, end > this.totalItems ? this.totalItems : end);
      },
      error => {
        console.log(error)
      },
      () => {
      }
    );
  }

  selectedQuestion: Question;

  onSelect(question: Question): void {
    this.selectedQuestion = question;
  }

  deleteQuestion(question: Question) {
    this.questionList.forEach(
      (value, index) => {
        // console.log('delete',value, index);
        if (value.id == question.id) {
          console.log('Index', index);
          this.questionList.splice(index, 1);
        }
      }
    );
    // server delete
    this.questionService.deleteQuestion(question.id);
    this.selectedQuestion = null;
  }

}
