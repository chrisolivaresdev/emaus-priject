import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { login } from '../interface/login.interface';
import {catchError, map, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl
  userActive:any

  constructor(private http: HttpClient, private route:Router) { }

  get token(): string{
    return localStorage.getItem('token') || '';
  }

  get user():string{
    return this.userActive
  }

  validarToken():Observable<boolean>{

    return this.http.get(`${this.baseUrl}/login/renew`, {
      headers:{
        'x-token' : this.token
      }
    }).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token)
        this.userActive = {
          email: resp.email,
          nombre: resp.nombre
        }
      }),
      catchError( error =>  of(false) )
    )
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigateByUrl('/login')
  }

  Login( data :any){
   return this.http.post(`${this.baseUrl}/login`,data)
   .pipe(
    tap( (resp:any) => {
      localStorage.setItem('token', resp.token)
      this.userActive = {
        email: resp.email,
        nombre: resp.nombre
      }
    }),
    map( resp => true)
   )
  }

}
