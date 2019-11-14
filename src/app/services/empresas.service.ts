import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root' 
})
export class EmpresasService {

  url = 'http://localhost:3000';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public http: HttpClient) {
    console.log('Service Empresas')
   }

  getEmpresas() {
    return new Promise(resolve =>{
      this.http.get(this.url+'/empresas').subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }

  getEmpresasById(id){
    return this.http.get<Empresa>(this.url + '/empresas/' + id)
      
    }

  addEmpresa(item): Observable<Empresa> {
    console.log(item)
    return this.http.post<Empresa>(this.url+'/empresas', JSON.stringify(item),this.httpOptions);
      
  }  

  updateEmpresa(id, item) {
    console.log('Funcion update del servicio')
    console.log(id);   
    console.log(item);    
    return this.http.post<Empresa>(this.url + '/empresas/' + id, JSON.stringify(item), this.httpOptions)
    
  }

  deleteEmpresa(id) {
    console.log(id)
    return this.http.delete<Empresa>(this.url + '/empresas/' + id, this.httpOptions)
  }

  getEmpresaUsuario(id){
    return this.http.get<Empresa>(this.url + '/empresausuario/' + id)
  }

}
