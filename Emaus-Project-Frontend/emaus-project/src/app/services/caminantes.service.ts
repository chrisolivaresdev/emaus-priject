import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CaminantesService {

  baseUrl = environment.baseUrl

  get token(): string{
    return localStorage.getItem('token') || '';
  }


  constructor(private http: HttpClient) { }

  get():Observable<any>{
    return this.http.get(`${this.baseUrl}/caminantes`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getById(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/caminantes/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }


  getByIdRetiro(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/caminantes/retiro/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }


  post(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/caminantes`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  update(id:any, body:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/caminantes/${id}`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/caminantesSamuel/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getSamuel():Observable<any>{
    return this.http.get(`${this.baseUrl}/caminantesSamuel`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getByIdSamuel(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/caminantesSamuel/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getByIdRetiroSamuel(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/caminantesSamuel/retiro/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  postSamuel(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/caminantesSamuel`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  updateSamuel(id:any, body:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/caminantesSamuel/${id}`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  deleteSamuel(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/caminantesSamuel/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getSerafin():Observable<any>{
    return this.http.get(`${this.baseUrl}/caminantesSerafin`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getByIdSerafin(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/caminantesSerafin/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getByIdRetiroSerafin(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/caminantesSerafin/retiro/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  postSerafin(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/caminantesSerafin`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  updateSerafin(id:any, body:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/caminantesSerafin/${id}`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  deleteSerafin(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/caminantesSerafin/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }


  getSemillita():Observable<any>{
    return this.http.get(`${this.baseUrl}/caminantesSemillita`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getByIdSemillita(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/caminantesSemillita/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  getByIdRetiroSemillita(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/caminantesSemillita/retiro/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }

  postSemillita(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/caminantesSemillita`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  updateSemillita(id:any, body:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/caminantesSemillita/${id}`, body , {
      headers:{
        'x-token' : this.token
      }
    })
  }

  deleteSemillita(id:any):Observable<any>{
    return this.http.delete(`${this.baseUrl}/caminantesSemillita/${id}`, {
      headers:{
        'x-token' : this.token
      }
    })
  }
}
