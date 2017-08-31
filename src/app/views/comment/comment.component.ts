import {Component, Input, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {User} from "../../models/user/user-model";
import {CommentService} from "../../services/comment/comment.service";
import {Comment} from "../../models/comment/comment-model";

@Component({
  selector: 'app-comment',
  templateUrl: 'comment.component.html',
  styleUrls: ['comment.component.scss']
})
export class CommentComponent implements OnInit {

  public postId: string;
  @Input()
  public type: string; // comment type: course, question, experience
  public isShowComment: boolean = true;
  public newCommentContent: string = '';
  public userName: string;
  public comments: Comment[];

  constructor(public router: Router, public activeRoute: ActivatedRoute,
              public commentService: CommentService) {

  }

  ngOnInit() {
    console.log('type', this.type);
    let user: User = JSON.parse(localStorage.getItem("currentUser"));
    // console.log('test1', user);
    if (user == null) {
      console.log("CommentComponent: not log in");
      this.userName = "";
    } else {
      console.log(user.userName);
      this.userName = user.userName;
    }

    this.activeRoute.params.subscribe(
      params => {
        this.postId = params["id"];
        this.loadComment(this.postId);
        console.log('postId', this.postId);
      }
    );

  }

  public loadComment(postId: string) {
    return this.commentService.getComments(postId).subscribe(
      data => this.comments = data,
      error => console.error(error)
    );
  }

  public showComment(): void {
    this.isShowComment = !this.isShowComment;
  }

  public addComment(): void {
    if (this.newCommentContent == "") {
      console.log("comment is empty.")   // TODO
      return;
    }

    if (this.userName == "") {
      this.router.navigateByUrl("sessions/signin");
    }

    let data = {
      postId: this.postId,
      commenter: this.userName,
      content: this.newCommentContent
    }

    console.log(data);
    this.commentService.addComment(data);

  }

  public deleteComment(comment: Comment): void {
    // local delete
    let index = this.comments.indexOf(comment);
    console.log('Index', index);
    this.comments.splice(index, 1);
    // server delete
    this.commentService.deleteComment(comment.id);

  }

  public showReply(comment: Comment): void {

  }

}
