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

public tags = [];
  public itemsPerPage: number = 8;
  public pageSizeOptions = [8, 16, 24];
  public totalItems: number;
  //不要手动对这个属性进行赋值，它是和分页工具条自动绑定的
  public currentPage: number = 1;

  public searchText: string;
  // public searchTextStream: Subject<string> = new Subject<string>();

  public questionList: Array<Question>;
  public totalQuestionList: Array<Question>;
  constructor(public questionService: QuestionService,
              public router: Router,
              public activeRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      // console.log(params);
      this.currentPage = params["page"];
      if (this.totalQuestionList && this.totalQuestionList.length > 0) {
        console.log("loadDataByPage", this.currentPage);
        this.loadDataByPage(this.currentPage);
      } else {
        this.loadData(this.searchText, this.currentPage);
        console.log("loadData", this.currentPage);
      }

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
  public loadDataByPage(page: number) {
    if (!this.totalQuestionList) {
      this.loadData("", page);
      return;
    }

    let offset = (this.currentPage - 1) * this.itemsPerPage;
    let end = (this.currentPage) * this.itemsPerPage;

    if (this.tags && this.tags.length > 0) {
      let filterQuestion = Array<Question>();

      this.totalItems = filterQuestion.length;
      this.questionList = filterQuestion.slice(offset, end > this.totalItems ? this.totalItems : end);
      console.log("filter size:", filterQuestion.length);
      return;
    }

    this.totalItems = this.totalQuestionList.length;
    this.questionList = this.totalQuestionList.slice(offset, end > this.totalItems ? this.totalItems : end);
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
    console.log(question);
    this.questionService.deleteQuestion(question.id).subscribe(
      data => {
        console.log("delete success", data);
      },
      err => {
        console.log("delete err", err);
      }
    );
    console.log(question);
    this.selectedQuestion = null;
  }
  public pageChanged(event: any): void {
    let pageNumber = event.pageIndex + 1;
    console.log("event page: " + pageNumber);
    this.router.navigateByUrl("admin/question/page/" + pageNumber);
  }
}
