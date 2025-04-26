import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public username : any;
  public roles :any
  public authenticated : boolean = false


  constructor(private router:Router) { }
  public login(username:string ,password:string){
      if (username=="admin"&& password=="12345"){
      this.username = username;
      this.authenticated = true
      this.roles = ['ADMIN']
        return true
    }else {
      return false
    }
  }

  logout() {
      this.authenticated = false;
      this.username = undefined;
      this.roles = undefined
      this.router.navigateByUrl('/login')
  }
}
