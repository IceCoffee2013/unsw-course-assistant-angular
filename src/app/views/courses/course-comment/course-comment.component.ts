import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {CommentService} from "../../../services/course/course-comment.service";
import {Comment} from "../../../models/comment/comment-model";


@Component({
  selector: 'app-course-comment',
  templateUrl: './course-comment.component.html',
  styleUrls: ['./course-comment.component.scss']
})
export class CourseCommentComponent implements OnInit {
  public comments: Array<Comment>;

  constructor(
    public commentService: CommentService,
    public activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getCommentList(params["postId"])
    );
  }

  public getCommentList(postId: number){
    this.commentService.getCommentList(postId)
      .subscribe(
        data => {
          this.comments = data["items"]
        },
        error => console.error(error)
      );
  }
}
