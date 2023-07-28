import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';
import {tap} from 'rxjs/operators';
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
export class NoticeService {
  constructor(private httpClient: HttpClient) { }
  //Obtiene todas las noticias
  public  getAllNotice(): Observable<any>{
    return this.httpClient.get(environment.API_MIDDLE + 'notice',httpOptions);

  }
  //Post para ingresar las noticias
  public addNotice(data : any): Observable<any> {
    console.log(data);
    return this.httpClient.post<any>(environment.API_MIDDLE + 'notice', JSON.stringify(data), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( dat: any ) => console.log(`added noticia w/ id=${dat.title}`)),
    );
  }

}
