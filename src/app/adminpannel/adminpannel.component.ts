import { Component, OnInit } from '@angular/core';
import { register } from 'src/app/model/register';
import { LoginService } from '../services/login.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-adminpannel',
  templateUrl: './adminpannel.component.html',
  styleUrls: ['./adminpannel.component.css']
})
export class AdminpannelComponent implements OnInit {

  constructor(private registerService:RegisterService) { }
userdata:any;

  ngOnInit(): void {
   this.getUserData()
  } 

  getUserData(){
    this.registerService.getRegister().subscribe((data:any) =>{
      this.userdata=data
      console.log('this is all data',this.userdata)
    })
  }
  
}
