import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  constructor( private routerLink:Router, private registerService:RegisterService) { }

  ngOnInit(): void {
  }
  register = new FormGroup({
    userName: new FormControl(''),
    userID:new FormControl(''),
    password: new FormControl(''),
    userType: new FormControl('')
  });

  registerlogin(){
      console.log('username',this.register.value.username);
      console.log('userid',this.register.value.userid);
      console.log('username',this.register.value.password);
      console.log('username',this.register.value.logintype);
  }
  Bcak(){
    this.routerLink.navigateByUrl('login');
  }

  userRegister(){
    let emailvalidation 
    this.registerService.userRegister(this.register.value).subscribe((res)=>{
      console.log(res);
      alert('register succesfull!!')
      this.routerLink.navigateByUrl('login');
    });
    
  }
  

}
