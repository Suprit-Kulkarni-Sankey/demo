import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthgaurdGuard } from '../services/authgaurd.guard';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor( private router: Router, public loginService:AuthgaurdGuard) { }

  ngOnInit(): void {
  }
  
  logout(){
    sessionStorage.removeItem('username')
         sessionStorage.removeItem('userID')
         sessionStorage.removeItem('userTYPE')
         this.router.navigateByUrl('/login')
  }

}
