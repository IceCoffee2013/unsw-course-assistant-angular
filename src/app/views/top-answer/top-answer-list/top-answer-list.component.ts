import {Component, OnInit} from "@angular/core";
import {MdDialog} from "@angular/material";
import {Question} from "../../../models/top-answer/question-model";
import {QuestionService} from "../../../services/top-answer/question-service";
import {Router, ActivatedRoute} from "@angular/router";
import {Subject} from "rxjs";


@Component({
  selector: 'app-top-answer',
  templateUrl: 'top-answer-list.component.html',
  styleUrls: ['top-answer-list.component.scss']
})

export class TopAnswerListComponent implements OnInit {
  // tags
  tags = [];
  autoCompleteTags: string[] = ['CSE', 'JAVA', 'AI', 'UNSW'];

  // paginator
  // public maxSize: number = 12;
  public itemsPerPage: number = 8;
  public pageSizeOptions = [8, 16, 24];
  public totalItems: number;
  //不要手动对这个属性进行赋值，它是和分页工具条自动绑定的
  public currentPage: number = 1;

  public searchText: string;
  public searchTextStream: Subject<string> = new Subject<string>();

  public questionList: Array<Question>;

  constructor(public dialog: MdDialog,
              public questionService: QuestionService,
              public router: Router,
              public activeRoute: ActivatedRoute,) {
  }

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      // 这里可以从路由里面获取URL参数
      console.log(params);
      this.loadData(this.searchText, this.currentPage);
    });

    this.searchTextStream
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(searchText => {
        console.log(this.searchText);
        this.loadData(this.searchText, this.currentPage)
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

  public pageChanged(event: any): void {
    let pageNumber = event.pageIndex + 1;
    console.log("event page: " + pageNumber);
    this.router.navigateByUrl("answer/page/" + pageNumber);
  }

  public showQuestionDialog() {
    const dialogRef = this.dialog.open(QuestionContentDialog, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onLike(question:Question){
    question.liked = !question.liked;
  }


  public onAdd(item) {
    console.log('tag added: value is ' + item.value);
    this.searchText = item.value.toUpperCase();
    this.searchTextStream.next(this.searchText);

    // convert tag to lowercase
    // display value

    // for (let tag of this.tags) {
    //   console.log(tag);
    //   tag.value = tag.value.toLowerCase();
    // }

    // do search
  }

}

@Component({
  selector: 'question-content-dialog',
  templateUrl: 'question-content-dialog.html',
})
export class QuestionContentDialog {

  items: string[] = ['java', 'python'];

  autocompleteItems: string[] = ['Item1', 'item2', 'item3'];

  public onAdd(item) {
    console.log('tag added: value is ' + item);
  }

}
