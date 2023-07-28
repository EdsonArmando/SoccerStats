import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';
import {tap} from 'rxjs/operators';
import { usuarioCreado } from 'src/app/models/Usuarios';
let auth_token = localStorage.getItem('userToken')
let ipESB = localStorage.getItem('ipESB')
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
export class ReportesService {

  constructor(private httpClient: HttpClient) { }
  /*
    Usuarios Suscritos a X equipo
 */
  public  getReporte1(idEquipo:any, ipESB:any): Observable<any>{
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.httpClient.get(ipESB + 'administrator/report/1/?id_team='+idEquipo,{headers: headers});
  }
  /*
    Usuario Con o Sin Membresía
    RUTA: http://localhost:5002//report/1/membership/
 */
  public  getReporte2(membership:any,ipESB:any): Observable<any>{
    return this.httpClient.get(ipESB + 'administrator/report/2/?membership='+membership,httpOptions);
  }
  /*
  Usuarios que Mas membresías han adquirido
  */
  public  getReporte3(ipESB:any): Observable<any>{
    return this.httpClient.get(ipESB + 'administrator/report/3/',httpOptions);
  }
/*
  Usuarios que más dinero han gastado
  */
  public  getReporte4(ipESB:any): Observable<any>{
    return this.httpClient.get(ipESB + 'administrator/report/4/',httpOptions);
  }
  /*
    Usuarios de X País
    RUTA: http://localhost:5002//report/1/country/?pais=1
 */
  public  getReporte5(idPais: any, ipESB:any): Observable<any>{
    return this.httpClient.get(ipESB + 'administrator/report/5/?id_country='+idPais,httpOptions);
  }
  /*
    Usuarios de X genero
    RUTA: http://localhost:5002//report/1/genero/?genero=1
 */
  public  getReporte6(idGenero: any, ipESB:any): Observable<any>{
    return this.httpClient.get(ipESB + 'administrator/report/6/?gender='+idGenero,httpOptions);
  }
  /*
      Usuarios con al menos X años de edad
      RUTA: http://localhost:5002//report/1/age/?edad=19
   */
  public  getReporte7(edad: any, ipESB:any): Observable<any>{
    return this.httpClient.get(ipESB + 'administrator/report/7/?age='+edad,httpOptions);
  }
  /*
    Reportes de noticias
    1. Empleados que mas/menos han publicado
    RUTA: http://localhost:5002//report/1/news?option=desc
    O
    RUTA: http://localhost:5002//report/1/news?option=asc
*/
  public  getReporte8(option: any, ipESB:any): Observable<any>{
    return this.httpClient.get(ipESB + 'administrator/report/8/?order='+option,httpOptions);
  }
  /*
      Reporte 9
      2. Empleados que mas/menos han publicado x equipo
      RUTA:http://localhost:5002//report/1/news/team/?equipo=2&option=asc
   */

  public  getReporte9(idEquipo: any, option: any, ipESB:any): Observable<any>{
    return this.httpClient.get(ipESB + 'administrator/report/9/?id_team='+idEquipo + '&order='+option,httpOptions);
  }

  public getReporte10(ipESB:any): Observable<any>{
    return this.httpClient.get(ipESB + 'administrator/report/10/',httpOptions);
  }

  /*first_name, last_name, birth_date, email, phone, gender, idCountry, rol*/
  Registro(usuario: usuarioCreado) {
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    console.log(usuario, auth_token)
    return this.httpClient.post(`${environment.API_ADMIN}person/create-staff`, {
      "first_name": usuario.first_name,
      "last_name": usuario.last_name,
      "birth_date": usuario.birth_date,
      "email": usuario.email,
      "phone": usuario.phone,
      "gender": usuario.gender,
      "idCountry": usuario.idCountry,
      "photo": usuario.photo,
      "rol": usuario.rol
    }, { headers: headers })
  }
}
