import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

declare let $:any
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userActive:any = this.authService.user

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.userActive = this.authService.user
    console.log(this.authService.user)
  }

  logout(){
    this.authService.logout()
  }

  dashboard(){
    this.router.navigateByUrl('dashboard')
  }

}
