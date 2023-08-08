import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RetiroService {

  baseUrl = environment.baseUrl

  get token(): string{
    return localStorage.getItem('token') || '';
  }

  constructor(private http: HttpClient) { }

  get():Observable<any>{
    return this.http.get(`${this.baseUrl}/retiro`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getById(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/retiro/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  post(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/retiro`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  update(id:any, body:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/retiro/${id}`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/retiro/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }
}
