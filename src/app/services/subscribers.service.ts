import { Injectable } from '@angular/core';
import { Sub } from '../modules/sub';
import { Firestore, addDoc, collection, collectionData, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private firestore: Firestore) { }

  addSub(subData: Sub) {
    const collectionRef = collection(this.firestore, 'Subscribers')
    addDoc(collectionRef, subData)
  }

  checkIfSubsExist(subEmail: string) {
    const collectionRef = collection(this.firestore, 'Subscribers');
    const queryRef = query(collectionRef, where('email', '==', subEmail))
    return collectionData(queryRef)
  }
}
