import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, limit, orderBy, query, where } from '@angular/fire/firestore';
import { ref } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private fireStore:Firestore) { }

  loadFeaturedPosts(){
    const collectionRef = collection(this.fireStore,'Posts')
    const queryRef =  query(collectionRef,where('isFeatured','==',true),limit(4))
    return collectionData(queryRef)
  }

  loadLatestPosts(){
    const collectionRef = collection(this.fireStore,'Posts');
    const queryRef = query(collectionRef,orderBy('createdAt','desc'))
    return collectionData(queryRef)
  }

  loadIndividualCategoryPosts(categoryId:string){
    const collectionRef = collection(this.fireStore,'Posts');
    const queryRef = query(collectionRef,where('category.categoryId',"==",categoryId))
    return collectionData(queryRef)
  }

}
