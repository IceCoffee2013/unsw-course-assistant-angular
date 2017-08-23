import {Component, NgModule, OnInit} from '@angular/core';


export class Childcomment {
  replier: string;
  toCommenter: string;
  replyContent: string;
  replyTime: string
}

export class Comment {
  avatar: string
  commenter: string
  createTime: string
  content: string
  slcs: Array<Childcomment>
}

export class Sying {
  id: number
  avatar: string
  author: string
  createTime: string
  sayingContent: string
  likes: string
  flcs: Array<Comment>
}


const SLCS: Childcomment[] = [{
  replier: 'fs',
  toCommenter: 'ds',
  replyContent: 'It might not look like the class has properties, but it does. The declaration of the constructor parameters takes advantage of a TypeScript shortcut',
  replyTime: '2017/8/18'
}, {
  replier: 'fs',
  toCommenter: 'ds',
  replyContent: 'It might not look like the class has properties, but it does. The declaration of the constructor parameters takes advantage of a TypeScript shortcut',
  replyTime: '2017/8/18'
},
  {
    replier: 'fs',
    toCommenter: 'ds',
    replyContent: 'It might not look like the class has properties, but it does. The declaration of the constructor parameters takes advantage of a TypeScript shortcut',
    replyTime: '2017/8/18'
  }, {
    replier: 'fs',
    toCommenter: 'ds',
    replyContent: 'It might not look like the class has properties, but it does. The declaration of the constructor parameters takes advantage of a TypeScript shortcut',
    replyTime: '2017/8/18'
  }
]

const FLCS: Comment[] = [{
  avatar: 'ads',
  commenter: 'tom',
  createTime: '2017/8/18',
  content: 'It might not look like the class has properties, but it does. The declaration of the constructor parameters takes advantage of a TypeScript shortcut',
  slcs: SLCS,
},
  {
    avatar: 'ads',
    commenter: 'tom',
    createTime: '2017/8/18',
    content: 'It might not look like the class has properties, but it does. The declaration of the constructor parameters takes advantage of a TypeScript shortcut',
    slcs: SLCS,
  },
  {
    avatar: 'ads',
    commenter: 'tom',
    createTime: '2017/8/18',
    content: 'It might not look like the class has properties, but it does. The declaration of the constructor parameters takes advantage of a TypeScript shortcut',
    slcs: SLCS,
  },
  {
    avatar: 'ads',
    commenter: 'tom',
    createTime: '2017/8/18',
    content: 'It might not look like the class has properties, but it does. The declaration of the constructor parameters takes advantage of a TypeScript shortcut',
    slcs: SLCS,
  },
  {
    avatar: 'ads',
    commenter: 'tom',
    createTime: '2017/8/18',
    content: 'It might not look like the class has properties, ' +
    'but it does. The declaration of the constructor parameters ' +
    'takes advantage of a TypeScript shortcut',
    slcs: SLCS,
  },
]
const SYING: Sying[] = [{
  id: 1,
  avatar: 'ds',
  author: 'tom',
  createTime: '2017/8/18',
  sayingContent: 'It might not look like the class has properties, but it does. The declaration of the constructor parameters takes advantage of a TypeScript shortcut',
  likes: 'sds',
  flcs: FLCS,
}]

@Component({
  selector: 'app-experience-list',
  templateUrl: 'experience-list.component.html',
  styleUrls: ['experience-list.component.scss']
})


export class ExperienceListComponent implements OnInit {
  show: boolean = false;
  saying = SYING;
  flcs = FLCS;
  secShow:boolean = false;

  ngOnInit() {
  }

  showComment() {
    this.show = !this.show;
  }
  showSlvComment() {
    this.secShow = !this.secShow;
  }
}

