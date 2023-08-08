import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  customers:any
  constructor(private router:Router) { }

  ngOnInit(): void {


  }

  Router(url:string){

    if(url == "R"){
      this.router.navigateByUrl('/retiros')
    }

    if(url == "S"){
      this.router.navigateByUrl('/servidores')
    }

    if(url == "C"){
      this.router.navigateByUrl('/caminantes')
    }
  }

}
