import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { register } from '../model/register';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid: string | undefined;
  password: string | undefined;


  constructor( private loginService: LoginService,  private rout: Router) { }

  ngOnInit(): void {
    // this.isUSerLogin()
  }
  login = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  Login(){
    console.log('userName',this.login.value.username)
    console.log('userName',this.login.value.password)
    
    this.loginService.userLogin(this.login.value.username).subscribe((data:any) =>{
    console.log('this is email data',data)
      if(data.length > 0 && data[0].userID === this.login.value.username && data[0].password === this.login.value.password){
        data[0].userType === 'admin' ?  this.rout.navigateByUrl('/admin') : this.rout.navigateByUrl('/developer')
         sessionStorage.setItem('username',data[0].userName)
         sessionStorage.setItem('userID',data[0].userID)
         sessionStorage.setItem('userTYPE',data[0].userType)
      }else{
        alert('Somthing went Wrong!!')
      }
  })
  

  }
  isUSerLogin(){
    let userName = sessionStorage.getItem('username')
    let UserID = sessionStorage.getItem('UserID')
    let userType = sessionStorage.getItem('userType')
    console.log('usename session',userName)
    console.log(!(userName === null))
    console.log(!(UserID === null))
    console.log(!(userType === null))
       
  }
}
