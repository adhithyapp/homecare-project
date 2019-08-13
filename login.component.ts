import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/functional/user.model'
import { AuthenticationService } from '../services/services/authentication/authentication.service';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User;

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
    
    this.user = new User();
  }

  SignIn(){
    
    this.authService.Authenticate(this.user).then(val=>{
     
    })
  }

}
