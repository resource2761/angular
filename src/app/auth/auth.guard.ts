import {Injectable} from '@angular/core';
// import CanActivate interface from angular router and implements
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import { authservice } from './auth.service';


@Injectable()
// use to route protects
export class authguard implements CanActivate 
{
    constructor(private authservice: authservice,private router: Router)
    {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
        if(this.authservice.isauth())
        {
            return true;

        }

        else
        {
            this.router.navigate(['/login']);

        }



    }


}