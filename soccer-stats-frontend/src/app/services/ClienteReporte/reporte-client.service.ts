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
export class ReporteClientService {

  constructor(private httpClient: HttpClient) { }

  public  getReporte1(id_team:any, player: any): Observable<any>{
    return this.httpClient.get(environment.url_reportAdmin + '/report/1/?id_team='+id_team+'&player='+player,httpOptions);
  }
  public  getReporte2(age:any, player: any): Observable<any>{
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    let endpoint = localStorage.getItem('ipESB')
    return this.httpClient.get(endpoint + 'customer/report/2/?age='+age+'&player='+player, { headers: headers });
  }
  public  getReporte3(age :any, player: any): Observable<any>{
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    let endpoint = localStorage.getItem('ipESB')
    return this.httpClient.get(endpoint + 'customer/report/3/?age='+age +'&player='+player,{ headers: headers });
  }
  public  getReporte4(id_competition:any): Observable<any>{
    return this.httpClient.get(environment.url_reportAdmin + '/report/4/?id_competition='+id_competition,httpOptions);
  }
  public  getReporte5(id_country:any): Observable<any>{
    return this.httpClient.get(environment.url_reportAdmin + '/report/5/?id_country='+id_country,httpOptions);
  }
  public  getReporte6(age:any): Observable<any>{
    let endpoint = localStorage.getItem('ipESB')
    return this.httpClient.get(endpoint + 'customer/report/6/?age='+age,httpOptions);
  }
  public  getReporte7(id_country:any): Observable<any>{
    return this.httpClient.get(environment.url_reportAdmin + '/report/7/?id_country='+id_country,httpOptions);
  }
  public  getReporte8(capacity:any): Observable<any>{
    let endpoint = localStorage.getItem('ipESB')
    return this.httpClient.get(endpoint + 'customer/report/8/?capacity='+capacity,httpOptions);
  }
  public  getReporte9(id_team:any): Observable<any>{
    return this.httpClient.get(environment.url_reportAdmin + '/report/9/?id_team='+id_team,httpOptions);
  }
  public  getReporte10(id_team:any, player: any): Observable<any>{
    return this.httpClient.get(environment.url_reportAdmin + '/report/10/?id_team='+id_team+'&player='+player,httpOptions);
  }
  public  getReporte11(goals:any): Observable<any>{
    let endpoint = localStorage.getItem('ipESB')
    return this.httpClient.get(endpoint + 'customer/report/11/?goals='+goals,httpOptions);
  }
  public  getReporte12(incidence:any, id_competition: any): Observable<any>{
    return this.httpClient.get(environment.url_reportAdmin + '/report/12/?incidence='+incidence+'&id_competition='+id_competition,httpOptions);
  }
  public  getReporte13(incidence:any, year: any, quantity: any): Observable<any>{
    return this.httpClient.get(environment.url_reportAdmin + '/report/13/?incidence='+incidence+'&year='+year,httpOptions);
  }
  public  getReporte14(id_team:any): Observable<any>{
    return this.httpClient.get(environment.url_reportAdmin + '/report/14/?id_team='+id_team,httpOptions);
  }
  public  getReporte15(year:any): Observable<any>{
    return this.httpClient.get(environment.url_reportAdmin + '/report/15/?year='+year,httpOptions);
  }
  public  getReporte16(id_team:any, id_opposing_team: any): Observable<any>{
    return this.httpClient.get(environment.url_reportAdmin + '/report/16/?id_team='+id_team+'&id_opposing_team='+id_opposing_team,httpOptions);
  }
  public  getReporte17(id_team:any): Observable<any>{
    return this.httpClient.get(environment.url_reportAdmin + '/report/17/?id_team='+id_team,httpOptions);
  }

}
