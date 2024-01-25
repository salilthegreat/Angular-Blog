import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../modules/post';
import { CommonModule } from '@angular/common';
import { MaxLengthPipe } from '../../pipes/max-length.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule,MaxLengthPipe,RouterLink],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent implements OnInit {

  @Input() postData!: any
  constructor() {

  }

  ngOnInit(): void {
  }

}
