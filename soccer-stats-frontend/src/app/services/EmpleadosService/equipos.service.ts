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
export class EquiposService {


  constructor(private httpClient: HttpClient) { }
  //Post para ingresar los Equipos
  public addEquipo(data : any): Observable<any> {
    /*let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })*/
    return this.httpClient.post<any>(environment.API_MIDDLE + 'team', JSON.stringify(data), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( dat: any ) => console.log(`added Equipo w/ id=${dat.name}`)),
    );
  }

  //Obtiene todas los Equipos
  public  getAllTeams(): Observable<any>{
    return this.httpClient.get(environment.API_MIDDLE + 'team', httpOptions );
  }
  //Elimina un equipo
  public  deleteTeam(id: number): Observable<any>{
    return this.httpClient.delete(environment.API_MIDDLE + 'team/' + id,httpOptions);
  }
  //Actualizar un equipo
  public updateTeam(data : any): Observable<any> {
    return this.httpClient.put<any>(environment.API_MIDDLE + 'team', JSON.stringify(data), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( dat: any ) => console.log(`Update Equipo w/ id=${dat.name}`)),
    );
  }
  /*
  Apartado para los estadios
   */
  //Post para ingresar los Estadios
  public addEstadio(data : any): Observable<any> {
    return this.httpClient.post<any>(environment.API_MIDDLE + 'stadium', JSON.stringify(data), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( dat: any ) => console.log(`added Equipo w/ id=${dat.name}`)),
    );
  }
  //Obtiene todas los Estadios
  public  getAllEstadios(): Observable<any>{
    return this.httpClient.get(environment.API_MIDDLE + 'stadium',httpOptions);
  }
  //Elimina un Estadios
  public  deleteEstadio(id: number): Observable<any>{
    return this.httpClient.delete(environment.API_MIDDLE + 'stadium/' + id,httpOptions);
  }
  //Actualizar un Estadios
  public updateEstadio(data : any): Observable<any> {
    return this.httpClient.put<any>(environment.API_MIDDLE + 'stadium', JSON.stringify(data), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( dat: any ) => console.log(`Update Estadio w/ id=${dat.name}`)),
    );
  }
  /*
  Apartado para las Competiciones
   */
  //Post para ingresar los Estadios
  public addCompetidcion(data : any): Observable<any> {
    return this.httpClient.post<any>(environment.API_MIDDLE + 'esb/competition', JSON.stringify(data), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( dat: any ) => console.log(`added Competicion w/ id=${dat.name}`)),
    );
  }
  // Prediccion
  public  prediccion(id_visitante:any, id_local: any, id_comp: any): Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post(`http://34.66.73.87:8083/algorithm/prediction`, {
      "team_home": id_local,
      "team_visitor": id_visitante,
      "id_competition": id_comp
    }, { headers: headers });
  }

  //Obtiene todas los Estadios
  public  getAllCompeticion(): Observable<any>{
    return this.httpClient.get(environment.API_MIDDLE + 'esb/competition',httpOptions);
  }
  //Elimina un Estadios
  public  deleteCompeticion(id: number): Observable<any>{
    return this.httpClient.delete(environment.API_MIDDLE + 'esb/competition/' + id,httpOptions);
  }
  //Actualizar un Estadios
  public updateCompeticion(data : any): Observable<any> {
    return this.httpClient.put<any>(environment.API_MIDDLE + 'esb/competition', JSON.stringify(data), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( dat: any ) => console.log(`Update Competicion w/ id=${dat.name}`)),
    );
  }
  /*
Apartado para los Jugadores y Tecnicos
 */
  //Post para ingresar los jugadores y tecnicos
  public addPersona(data : any): Observable<any> {
    return this.httpClient.post<any>(environment.API_ADMIN + 'person/create', JSON.stringify(data), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( dat: any ) => console.log(`added Persona w/ id=${dat.name}`)),
    );
  }
  //Obtiene todas los jugadores o tecnicos
  public getPersona(data : any): Observable<any> {
    return this.httpClient.post<any>(environment.API_ADMIN + 'person/read', JSON.stringify(data), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( dat: any ) => console.log(`los datos Persona w/`)),
    );
  }
  //Elimina un jugador o tecnico
  public deletePersona(data : any): Observable<any> {
    return this.httpClient.post<any>(environment.API_ADMIN + 'person/delete', JSON.stringify(data), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( dat: any ) => console.log(`se elimino Persona w/`)),
    );
  }
  //Actualizar un jugador o tecnico
  public updatePersona(data : any): Observable<any> {
    return this.httpClient.put<any>(environment.API_ADMIN + 'person/update', JSON.stringify(data), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( dat: any ) => console.log(`Update Persona w/ id=${dat.name}`)),
    );
  }
  /*
   Apartado para los Partidos
    */
  //Post para ingresar los partidos
  public addPartido(data : any): Observable<any> {
    return this.httpClient.post<any>(environment.API_MIDDLE + 'soccer_games', JSON.stringify(data), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( dat: any ) => console.log(`added Partido w/ id=${dat}`)),
    );
  }
  //Obtiene todas los Partidos
  public  getAllPartidos(): Observable<any>{
    return this.httpClient.get(environment.API_MIDDLE + 'soccer_games',httpOptions);
  }
  /*
  Acciones de los empleados tranferis jugadores, tecnicos y incidencias
   */
  //Obtiene todos los datos de la bitacora
  public  getAllLogs(): Observable<any>{
    return this.httpClient.get(environment.API_MIDDLE + 'transfer-log',httpOptions);
  }
  //Insertar
  public transferPlayer(data : any): Observable<any> {
    return this.httpClient.post<any>(environment.API_MIDDLE + 'transfer-player', JSON.stringify(data), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( dat: any ) => console.log(`Transfer Player w/ id=${dat.name}`)),
    );
  }
  public transferDirector(data : any): Observable<any> {
    return this.httpClient.post<any>(environment.API_MIDDLE + 'transfer-coach', JSON.stringify(data), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( dat: any ) => console.log(`Transfer Director w/ id=${dat.name}`)),
    );
  }

  /*
  Incidencias
   */
  public  getAllIncidencias(): Observable<any>{
    return this.httpClient.get(environment.API_MIDDLE + 'get-incidence',httpOptions);
  }
  //Ingresar Incidencia
  public addIncidencia(data : any): Observable<any> {
    return this.httpClient.post<any>(environment.API_MIDDLE + 'add-incidence', JSON.stringify(data), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( dat: any ) => console.log(`Incidencia Player w/ id=${dat.name}`)),
    );
  }
  public UploadFile(data : any){
    const url = environment.URL_FILES + 'subirArchivo';

    return this.httpClient.post<any>(url,JSON.stringify(data), {headers: httpOptions.headers}
    ).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( image ) => console.log(`added image w/ id=${image}`)),
    );
  }
}
