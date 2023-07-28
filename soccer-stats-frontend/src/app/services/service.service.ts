import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http"
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { usuarioCreado } from '../models/Usuarios';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public url_user: string = environment.url_user
  public url_client: string = environment.url_client
  constructor(private http: HttpClient, private router: Router) { }
  Registro(usuario: usuarioCreado) {
    return this.http.post(`${this.url_user}client/create`, {
      "first_name": usuario.first_name,
      "last_name": usuario.last_name,
      "birth_date": usuario.birth_date,
      "email": usuario.email,
      "phone": usuario.phone,
      "gender": usuario.gender,
      "location": usuario.location,
      "isMember": usuario.isMember,
      "idCountry": usuario.idCountry,
      "password": usuario.password,
      "photo": usuario.photo,
      "rol": usuario.rol
    })
  }
  UpdateClient(usuario: usuarioCreado, id_client: string) {
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })

    return this.http.put(`${this.url_user}client/update`, {
      "id_client": id_client,
      "first_name": usuario.first_name,
      "last_name": usuario.last_name,
      "birth_date": usuario.birth_date,
      "email": usuario.email,
      "phone": usuario.phone,
      "gender": usuario.gender,
      "location": usuario.location,
      "isMember": usuario.isMember,
      "idCountry": usuario.idCountry,
      "password": usuario.password,
      "photo": usuario.photo
    }, { headers: headers })
  }
  DeleteCount(id_client: string) {
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    const options = {
      headers: headers,
      body: {
        "id": id_client
      },
    };
    let endpoint = localStorage.getItem('ipESB')
    return this.http.delete(`${endpoint}esb/customer/`, options)
  }
  getCountries() {
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get(`${this.url_user}countries`, { headers: headers });
  }
  verifyEmail(id: string) {
    let endpoint = localStorage.getItem('ipESB')
    return this.http.get(`${endpoint}?id=${id}`)
  }
  Login(email: string, password: string) {
    let endpoint = localStorage.getItem('ipESB')
    try{
      return this.http.post(`${endpoint}auth/`, {
      "email": email,
      "password": password
    })
    }catch (e){
      console.log(e,"hoaaa")
      return this.http.post(`${endpoint}auth/`, {
        "email": email,
        "password": password
      })
    }
    
  }
  saveUser(email: string, token: string, userId: any, rol: any) {
    localStorage.setItem('userSession', email);
    localStorage.setItem('userId', userId);
    localStorage.setItem('userToken', token);
    localStorage.setItem('userRol', rol);
  }
  saveIP(ipESB: string) {
    localStorage.setItem('ipESB', ipESB);
  }


  getClient(id: string) {
    let ids = localStorage.getItem('userId');
    console.log(id)
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    let endpoint = localStorage.getItem('ipESB')
    return this.http.get(`${endpoint}customer/?id=${ids}`, { headers: headers })
  }

  forgotEmail(email: string) {
    let endpoint = localStorage.getItem('ipESB')
    this.http.post(`${endpoint}auth/temporal-password`, {
      "email": email
    }).subscribe((res) => {
    })
  }

  getId(email: string) {
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.post(`${this.url_user}getId`, {
      "email": email
    }, { headers: headers })
  }
  changePassword(newpasword: string, temporal: string, email: string, auth_token: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    console.log(newpasword, temporal, email, auth_token)
    let endpoint = localStorage.getItem('ipESB')
    return this.http.post(`${endpoint}auth/reset-password`, {
      "new_password": newpasword,
      "temporal_password": temporal,
      "email": email
    }, { headers: headers })
  }

  getUser() {
    let usuario = localStorage.getItem('userSession');
    if (usuario != null) {
      let user_JSON = usuario;
      return user_JSON;
    } else {
      return null;
    }
  }

  getRol() {
    let rol = localStorage.getItem('userRol');
    if (rol != null) {
      let user_JSON = rol;
      return user_JSON;
    } else {
      return null;
    }
  }

  infoClient(id: string) {
    let auth_token = localStorage.getItem('userToken');
    return fetch(`${this.url_client}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH',
        'Access-Control-Allow-Headers': '',
        'Authorization': `Bearer ${auth_token}`
      },
      body: JSON.stringify({
        "id_client": localStorage.getItem('userId'),
      })
    }).then((res: any) => res.json()).then((data: any) => {
      return data
    })

  }

  Membership(id: string) {
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    let endpoint = localStorage.getItem('ipESB')
    return this.http.put(`${endpoint}customer/membership`, {
      "id_client": localStorage.getItem('userId'),
    }, { headers: headers })
  }

  BajaMembership(id: string) {
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    let endpoint = localStorage.getItem('ipESB')
    return this.http.put(`${endpoint}customer/membership/?id_client=${id}`, {
      "id_client": localStorage.getItem('userId'),
  }, { headers: headers })
  }

  Partidos() {
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get(`${this.url_client}partidos`, { headers: headers })
  }

  Equipos(id: string) {
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.post(`${this.url_client}equipos`, {
      "id_client": id
    }, { headers: headers })
  }

  EquiposFav(id: string) {
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    const options = {
      headers: headers,
      body: {
        "id_client": localStorage.getItem('userId'),
      },
    };
    let endpoint = localStorage.getItem('ipESB')
    return this.http.get(`${endpoint}customer/follow/?id_client=${id}`, options)
  }

  Follow(id_client: string, id_team: string) {
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.post(`${this.url_client}follow`, {
      "id_client": id_client,
      "id_team": id_team
    }, { headers: headers })
  }

  getAllNotices(id: string) {
    let auth_token = localStorage.getItem('userToken');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get(`${this.url_client}my-favorite-notices/${id}`, { headers: headers })

  }

}
