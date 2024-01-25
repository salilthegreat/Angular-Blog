import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { CommentFormComponent } from '../../comments/comment-form/comment-form.component';
import { CommentsListComponent } from '../../comments/comments-list/comments-list.component';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [PostCardComponent, CommentFormComponent, CommentsListComponent, CommonModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent implements OnInit {

  postDetails: any
  samePostArray: any
  categoryId!:any

  constructor(private postService: PostService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.params.subscribe((val) => {
      // this.postService.increaseViews(val['id'])
      this.postService.loadSinglePost(val['id']).then((val) => {
        this.postDetails = val.data();
        this.categoryId = this.postDetails.category.categoryId
        this.loadSameCategoryPost(this.categoryId).subscribe((val)=>{
          this.samePostArray = val
        })
      }
      )
    })
  }
  loadSameCategoryPost(catId: string) {
    return this.postService.loadSameCategoryPost(catId)
  }
}
