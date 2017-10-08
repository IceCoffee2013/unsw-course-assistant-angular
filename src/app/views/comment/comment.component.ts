import {Component, Input, OnInit, AfterViewInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {User} from "../../models/user/user-model";
import {CommentService} from "../../services/comment/comment.service";
import {Comment} from "../../models/comment/comment-model";
import {Reply} from "../../models/comment/reply-model";
import {AppConfirmService} from "../../services/app-confirm/app-confirm.service";

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
  public tmpReply: Reply = new Reply();

  constructor(public router: Router,
              public activeRoute: ActivatedRoute,
              public commentService: CommentService,
              public confirmService: AppConfirmService) {
  }

  ngOnInit() {
    console.log('type', this.type);
    let user: User = JSON.parse(localStorage.getItem("currentUser"));
    // console.log('test1', user);
    if (user == null) {
      console.log("CommentComponent: not log in");
      this.userName = "";
    } else {
      console.log(user.username);
      this.userName = user.username;
    }

    // define comment data source.
    this.commentService.setCommentType(this.type);

    this.activeRoute.params.subscribe(
      params => {
        this.postId = params["id"];
        this.loadComment(this.postId);
        console.log('postId', this.postId);
      }
    );

  }

  public loadComment(postId: string) {
    return this.commentService.getComments(postId, this.type).subscribe(
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

    // local add comment. TODO update after post
    let tmpComment = new Comment();
    let date = new Date();
    tmpComment.postTime = date;
    tmpComment.postId = this.postId;
    tmpComment.commenter = this.userName;
    tmpComment.content = this.newCommentContent;
    tmpComment.avatar = "assets/images/face-5.jpg";
    tmpComment.id = "10";

    this.comments.push(tmpComment);
    this.newCommentContent = "";

    console.log(data);
    this.commentService.addComment(data, this.type).subscribe(
      data => {
        console.log("add comment", data);
        this.loadComment(this.postId);
      },
      err => {
        console.log("add comment err", err);
      }
    );

  }

  public deleteComment(comment: Comment): void {
    let title = "Delete This Comment ?";
    let text = "";

    this.confirmService.confirm(title, text)
      .subscribe((result) => {
        if (result) {
          // local delete
          this.comments.forEach(
            (value, index) => {
              if (value.id == comment.id) {
                console.log('Index', index);
                this.comments.splice(index, 1);
              }
            }
          );
          // server delete
          this.commentService.deleteComment(comment.id);
        }
      });
  }

  public deleteReply(comment: Comment, reply: Reply): void {

    let title = "Delete This Reply ?";
    let text = "";

    this.confirmService.confirm(title, text)
      .subscribe((result) => {
        if (result) {
          // local delete
          for (let cc of this.comments) {
            if (cc.id == comment.id) {
              cc.replies.forEach(
                (value, index) => {
                  if (value.id == reply.id) {
                    cc.replies.splice(index, 1)
                  }
                }
              );
            }
          }
          // remote delete
          this.commentService.deleteReply(reply.id).subscribe(
            data => {
              console.log("delete reply", data);
              this.loadComment(this.postId);
            },
            err => {
              console.log("delete reply err", err);
            }
          );
        }
      });
  }

  public showReplyDialog(comment: Comment, toWho: string): void {
    if (!this.tmpReply.isShow) {
      this.tmpReply.replyContent = "@" + toWho + " ";
      this.tmpReply.toWho = toWho;
      this.tmpReply.commentId = comment.id;
      this.tmpReply.isShow = true;
    } else {
      if (toWho == this.tmpReply.toWho) {
        this.tmpReply.replyContent = "";
        this.tmpReply.toWho = "";
        this.tmpReply.commentId = "";
        this.tmpReply.isShow = false;
      } else {
        this.tmpReply.replyContent = "@" + toWho + " ";
        this.tmpReply.commentId = comment.id;
        this.tmpReply.toWho = toWho;
      }
    }
  }

  public hideReplyDialog(): void {
    this.tmpReply.isShow = false;
    this.tmpReply.replyContent = "";
    this.tmpReply.toWho = "";
    this.tmpReply.commentId = "";
  }

  public addReply(): void {

    let data = {
      commentId: this.tmpReply.commentId,
      replyContent: this.tmpReply.replyContent,
      replier: this.tmpReply.replier,
      toWho: this.tmpReply.toWho
    }
    let date = new Date();
    this.tmpReply.replyTime = date;
    console.log("add reply", this.tmpReply);

    // local add TODO add time after post
    this.comments.forEach(
      value => {
        if (value.id == this.tmpReply.commentId) {
          value.replies.push(this.tmpReply);
        }
      }
    );

    // remote add
    this.commentService.addReply(data).subscribe(
      data => {
        console.log("reply success", data);
        for (let i in this.comments) {
          if (this.comments[i].id === data.id) {
            this.comments[i] = data;
          }
        }
      },
      err => {
        console.log("add reply err", err);
      }
    );

    // refresh tmp
    this.tmpReply = new Reply();
  }
}
