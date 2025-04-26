import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class  LoginComponent  implements OnInit{
  public loginFormgroup! : FormGroup

  constructor(private fb :FormBuilder,private authServices:AuthService,private router:Router  ) {
  }
  ngOnInit(): void {
    this.loginFormgroup = this.fb.group({
      username : this.fb.control(''),
      password : this.fb.control(''),
    })
  }


  login() {
    let username = this.loginFormgroup.value.username;
    let password = this.loginFormgroup.value.password;
    let auth :boolean =   this.authServices.login(username,password);
    if (auth){
      this.router.navigateByUrl('/home')
    }
  }
}
