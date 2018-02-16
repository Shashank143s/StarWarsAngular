import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'; 
import { StarWarsService } from './star-wars.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private swService:StarWarsService, private router:Router){}

    canActivate(){
        if(this.swService.tokenValidity()){
            return true;
        }
        else{
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}