import { Component, OnInit } from '@angular/core';
import{Login} from './login'
import{ Router} from '@angular/router'
import{InventoryService}from '../inventory.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private router:Router,private obj:InventoryService) { }
model =new Login()
inventory_data:Login[]=[]
isLoggedin:boolean=false
returnUrl="home"
  ngOnInit(): void {
    this.obj.getInventory().subscribe((data)=>{
      console.log(data)
      this.inventory_data=data.map((doc_data)=>{
        return{
          id:doc_data.payload.doc.id,
          ...doc_data.payload.doc.data() as {}
        } as Login
      })
      })
  }
login(){
  console.log(this.model.username)
  console.log(this.model.password)
  if(this.model.username=="admin" && this.model.password=="admin"){
console.log("loggin succesfull")
this.isLoggedin =true
localStorage.setItem("status","true")

this.router.navigate([this.returnUrl])
}
else
{
  this.router.navigate(["login"])
  console.log("invalid login")
}
}

// readData(){
  
  // }


save(){
  if(this.model.id==""){
  this.obj.saveInventory(this.model)
  this.model=new Login()
  console.log(this.model)
}
else{
  this.obj.updateInventory(this.model)
}
}
editData(invent:Login){
  this.model=invent
}
deleteData(invent:Login){
  console.log("delete")
  this.obj.deleteInventory(invent)
}
}

