import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

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
