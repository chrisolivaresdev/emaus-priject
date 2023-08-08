import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServidoresService {

  baseUrl = environment.baseUrl

  get token(): string{
    return localStorage.getItem('token') || '';
  }


  constructor(private http: HttpClient) { }

  get():Observable<any>{
    return this.http.get(`${this.baseUrl}/servidores`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getById(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/servidores/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }


  getByIdRetiro(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/servidores/retiro/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }


  post(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/servidores`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  update(id:any, body:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/servidores/${id}`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/servidores/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }
}
