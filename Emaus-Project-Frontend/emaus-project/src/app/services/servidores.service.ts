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


  getSamuel():Observable<any>{
    return this.http.get(`${this.baseUrl}/servidoresSamuel`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getByIdSamuel(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/servidoresSamuel/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getByIdRetiroSamuel(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/servidoresSamuel/retiro/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  postSamuel(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/servidoresSamuel`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  updateSamuel(id:any, body:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/servidoresSamuel/${id}`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  deleteSamuel(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/servidoresSamuel/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getSerafin():Observable<any>{
    return this.http.get(`${this.baseUrl}/servidoresSerafin`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getByIdSerafin(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/servidoresSerafin/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getByIdRetiroSerafin(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/servidoresSerafin/retiro/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  postSerafin(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/servidoresSerafin`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  updateSerafin(id:any, body:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/servidoresSerafin/${id}`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  deleteSerafin(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/servidoresSerafin/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getSemillita():Observable<any>{
    return this.http.get(`${this.baseUrl}/servidoresSemillita`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getByIdSemillita(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/servidoresSemillita/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getByIdRetiroSemillita(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/servidoresSemillita/retiro/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  postSemillita(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/servidoresSemillita`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  updateSemillita(id:any, body:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/servidoresSemillita/${id}`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  deleteSemillita(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/servidoresSemillita/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }
}
