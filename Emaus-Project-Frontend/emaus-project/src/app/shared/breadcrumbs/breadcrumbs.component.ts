import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnDestroy  {

  title!:string
  tituloSubs:Subscription

  constructor( private router:Router) {
  this.tituloSubs = this.dataRuta().subscribe(resp => {
    const {title} = resp
    this.title = title
})
}

ngOnDestroy(): void {
  this.tituloSubs.unsubscribe()
}

dashboard(){
  this.router.navigateByUrl('/dashboard')
}

dataRuta(){
  return this.router.events
  .pipe(
    filter((event): event is ActivationEnd => event instanceof ActivationEnd),
    filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
    map((event:ActivationEnd) => event.snapshot.data)
  )
}


}
