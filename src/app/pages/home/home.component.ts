import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  featuredPosts!: Observable<any>
  latestPosts!: Observable<any>

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.featuredPosts = this.postService.loadFeaturedPosts()
    this.latestPosts = this.postService.loadLatestPosts()

  }
}
