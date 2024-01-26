import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css'
})
export class CategoryNavbarComponent implements OnInit {
  categoryList!:Observable<any>
  toggle:boolean = false
  constructor(
    private categoryService:CategoriesService,
    ){

  }

  ngOnInit(): void {
   this.categoryList =  this.categoryService.loadCategory();
  }

  toggleMenu(){
    this.toggle = !this.toggle
  }
}
