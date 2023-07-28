import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
let auth_token = localStorage.getItem('userToken')
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': `Bearer ${auth_token}`
  })
};
@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  constructor(private httpClient: HttpClient) { }
  //Obtiene todas las noticias
  public  getAllCountries(): Observable<any>{
    return this.httpClient.get(environment.API_ADMIN + 'paises',httpOptions);
  }
}
