import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../services/service.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityemployeeGuard implements CanActivate {
  constructor(public UserService: ServiceService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.UserService.getRol()==="2") { 
        
       
      }else{
        this.router.navigate(['/error']);
        
        return false;
      } 
      return true;
  }
  
}
