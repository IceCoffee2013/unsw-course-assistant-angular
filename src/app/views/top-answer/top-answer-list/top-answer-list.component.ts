import {Component, NgModule, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {Tag} from "../../../models/top-answer/tag-model";


@Component({
  selector: 'app-top-answer',
  templateUrl: 'top-answer-list.component.html',
  styleUrls: ['top-answer-list.component.scss']
})

export class TopAnswerListComponent implements OnInit {
  show: boolean = false;

  constructor(public dialog: MdDialog) {}

  ngOnInit() {
  }

  showask() {
    this.show = !this.show;
  }

  public openDialog() {
    const dialogRef = this.dialog.open(QuestionContentDialog, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}

@Component({
  selector: 'question-content-dialog',
  templateUrl: 'question-content-dialog.html',
})
export class QuestionContentDialog {

  items:string[] = ['java', 'python'];

  autocompleteItems: string[] = ['Item1', 'item2', 'item3'];

  public onAdd(item) {
    console.log('tag added: value is ' + item);
  }

}
