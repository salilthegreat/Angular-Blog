import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: 'category/:category/:id', loadComponent: () => import('./pages/single-category/single-category.component').then((c) => c.SingleCategoryComponent) },
    { path: 'post', loadComponent: () => import('./pages/single-post/single-post.component').then((c) => c.SinglePostComponent) },
    { path: 'about', loadComponent: () => import('./pages/about-us/about-us.component').then((c) => c.AboutUsComponent) },
    { path: 'terms-conditions', loadComponent: () => import('./pages/terms-and-conditions/terms-and-conditions.component').then((c) => c.TermsAndConditionsComponent) },
    { path: 'contact', loadComponent: () => import('./pages/contact-us/contact-us.component').then((c) => c.ContactUsComponent) },

];
