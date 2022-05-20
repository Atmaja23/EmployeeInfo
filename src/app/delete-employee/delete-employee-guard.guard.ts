import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteEmployeeGuardGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id= Number(route.paramMap.get('id'));
      if(isNaN(id) || id<1){
        alert('Invalid Employee Id');
        this.router.navigate(['/employees']);
        return false;

      }else{
        if(confirm('Are you sure you want to delete ?'))
        return true;
        else{
          this.router.navigate(['/employees']);
          return false;
        }
      }
    
  }
  
}
