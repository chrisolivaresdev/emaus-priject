import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  customers:any
  userActive!:User
  constructor(private router:Router, private authService:AuthService) { }


  ngOnInit(): void {
    this.userActive = this.authService.userActive
  }

  Router(url:string){
    switch (url) {
      case 'R':
      this.router.navigateByUrl('/retiros')
        break;

      case 'S':
        this.router.navigateByUrl('/servidores')
          break;

      case 'C':
        this.router.navigateByUrl('/caminantes')
          break;

      default:
        break;
    }
  }
}
