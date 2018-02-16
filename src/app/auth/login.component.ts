import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})

export class LoginComponent {
    private swService:StarWarsService ;
    constructor(swService:StarWarsService){
        this.swService = swService;
    }

    onSubmit(formValues){
        console.log(formValues.value.username + ' and ' + formValues.value.password);
        this.swService.login({ username : formValues.value.username , password : formValues.value.password  })
        .subscribe((data)=>{
            localStorage.setItem('token',data.token);
        });
    }
    
}