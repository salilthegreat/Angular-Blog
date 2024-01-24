import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private fireStore:Firestore) { }
  loadCategory(){
    const collectionRef = collection(this.fireStore,'Categories')
    return collectionData(collectionRef)
}
}
