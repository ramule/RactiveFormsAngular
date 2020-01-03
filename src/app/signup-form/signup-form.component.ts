import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValitorsComponent } from './username.validators';

@Component({
    selector: 'app-signup-form',
    templateUrl: './signup-form.component.html'
})
export class SignupFormComponent{

    form = new FormGroup({
        username: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            UsernameValitorsComponent.cannotContainSpace
        ], UsernameValitorsComponent.shouldBeUnique),

       // username: new FormControl('', Validators.required, UsernameValitorsComponent.shouldBeUnique),
        password: new FormControl('', Validators.required)
    });
    
    get username(){
        return this.form.get('username');
    }

    get password(){
        return this.form.get('password');
    }
}