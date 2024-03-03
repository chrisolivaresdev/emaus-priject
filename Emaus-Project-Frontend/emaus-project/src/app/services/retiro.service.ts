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

  getSamuel():Observable<any>{
    return this.http.get(`${this.baseUrl}/retiroSamuel`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getByIdSamuel(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/retiroSamuel/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  postSamuel(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/retiroSamuel`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  updateSamuel(id:any, body:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/retiroSamuel/${id}`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  deleteSamuel(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/retiroSamuel/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getSerafin():Observable<any>{
    return this.http.get(`${this.baseUrl}/retiroSerafin`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getByIdSerafin(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/retiroSerafin/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  postSerafin(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/retiroSerafin`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  updateSerafin(id:any, body:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/retiroSerafin/${id}`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  deleteSerafin(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/retiroSerafin/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getSemillita():Observable<any>{
    return this.http.get(`${this.baseUrl}/retiroSemillita`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getByIdSemillita(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/retiroSemillita/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  postSemillita(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/retiroSemillita`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  updateSemillita(id:any, body:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/retiroSemillita/${id}`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  deleteSemillita(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/retiroSemillita/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

}
