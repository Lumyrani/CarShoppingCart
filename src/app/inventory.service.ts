import { Injectable } from '@angular/core';
import{Login}from'./login/login'
import{AngularFirestore} from'@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private firestore:AngularFirestore) { }
  saveInventory(invent:Login){
    this.firestore.collection("inventorystore").add({ username:invent.username,password:invent.password})
  }
  
  getInventory(){
    return this.firestore.collection("inventorystore").snapshotChanges()
  }
  updateInventory(obj:Login){
   this.firestore.doc("Inventorystore/"+obj.id).update({...obj})
  }
  deleteInventory(invent:Login){
    console.log("delete")
    this.firestore.doc("Inventorystore/"+invent.id).delete()
   }
}
