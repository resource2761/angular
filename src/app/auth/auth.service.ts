import {Injectable} from '@angular/core';
import { user } from "./user.model";
import { authdata } from "./auth.data.model";
// subject used to event emmi() and subscribe to the other parts
import {Subject} from 'rxjs/Subject';

import {Router} from '@angular/router';

// for add a service in this serive ex. under authservice
// to be inject a service in another service use @Injectable() decorator
@Injectable() // decorator



export class authservice
{
    // indicate subject as boolean payload
    authchange = new Subject<boolean>();

    private user: user;

// add a constructor to receive a router

constructor(private router : Router)
{

}


    // call during user signed up
    registeruser(authdata: authdata)
    {
        this.user={
            email:authdata.email,
            userid: Math.round(Math.random() * 10000).toString()
        };

        this.authsuccess();
    }

    // call during login
    login(authdata: authdata)
    {
        this.user={
            email:authdata.email,
            userid: Math.round(Math.random() * 10000).toString()
        };

        this.authsuccess();
    
    }

    // call during logout

    logout()
    {
         this.user=null;
         // because no longer logged in
         this.authchange.next(false);
         this.router.navigate(['/login']); 

    }


    // get the user after login
    // use spread operator to get the update value of this.user
    getuser()
    {
        return {...this.user};
    }

    // isauth() shows already authenticate or not

    isauth()
    {
      return  this.user !=null;
    }

    // if authorisation is successfull
    private authsuccess()
    {
        this.authchange.next(true);
        this.router.navigate(['/training']); 


    }



}