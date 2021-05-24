// import { Injectable } from '@angular/core';
// import { CanActivate,ActivatedRouteSnapshot,Router,RouterStateSnapshot } from '@angular/router';
// import { CartService } from './cart.service';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuardService implements CanActivate {


// constructor(private router:Router) { }
//   canActivate(activate:ActivatedRouteSnapshot,route:RouterStateSnapshot){
//     if(this.isLoggedIn()){
//       return true}
//       else{
//         return false
//       }
//       this.router.navigate(["/login"])
//     }
//     isLoggedIn(){
//       if(localStorage.getItem("status")=="true"){
//         return true
//       }
//       else{
//         return false
//       }
//     }
//   }