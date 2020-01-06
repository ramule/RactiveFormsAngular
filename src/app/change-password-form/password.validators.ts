import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValiadtors{
    static invalidOldPwd(control: AbstractControl) : Promise <ValidationErrors | null>{
        return new Promise((resolve) => {
            if(control.value !== 'ravi1234'){
                resolve ({invalidOldPwd : true});
            }
            else
            resolve(null);
        });
    }

    static passwordShouldMatch(control : AbstractControl){
        let newPassword = control.get('newPassword').value;
        let cnfPassword = control.get('cnfPassword').value;

        if(newPassword !== cnfPassword) { 
            return {passwordShouldMatch : true};
        }
        else
        return null;
    }

    static oldAndNewPwdShouldNotMatch(control : AbstractControl){
        let oldPassword = control.get('oldPassword').value;
        let newPassword = control.get('newPassword').value;

        if(oldPassword === newPassword) { 
            return {oldAndNewPwdShouldNotMatch : true};
        }
        else
        return null;
    }
}