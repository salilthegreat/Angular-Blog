import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc, increment, limit, orderBy, query, updateDoc, where } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private fireStore:Firestore) { }

  loadFeaturedPosts(){
    const collectionRef = collection(this.fireStore,'Posts')
    const queryRef =  query(collectionRef,where('isFeatured','==',true),limit(4))
    return collectionData(queryRef,{'idField':'id'})
  }

  loadLatestPosts(){
    const collectionRef = collection(this.fireStore,'Posts');
    const queryRef = query(collectionRef,orderBy('createdAt','desc'))
    return collectionData(queryRef,{'idField':'id'})
  }

  loadIndividualCategoryPosts(categoryId:string){
    const collectionRef = collection(this.fireStore,'Posts');
    const queryRef = query(collectionRef,where('category.categoryId',"==",categoryId))
    return collectionData(queryRef,{'idField':'id'})
  }

  loadSinglePost(postId:string){
    const docRef = doc(this.fireStore, 'Posts', postId)
    return getDoc(docRef)
  }

  loadSameCategoryPost(categoryId:string){
    const collectionRef = collection(this.fireStore,'Posts');
    const queryRef = query(collectionRef,where('category.categoryId','==',categoryId),limit(2));
    return collectionData(queryRef,{idField:'id'})
  }
  increaseViews(postId:string){
    const docRef = doc(this.fireStore,'Posts',postId);
    updateDoc(docRef,{views:increment(1)})
  }

}
