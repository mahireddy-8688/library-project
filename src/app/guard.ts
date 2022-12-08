import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import{ Injectable } from '@angular/core'

@Injectable({
    providedIn:'root'
})

export class guard implements CanActivate{
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let a=localStorage.getItem('login')?? ''
        return JSON.parse(a)
    }
    
}