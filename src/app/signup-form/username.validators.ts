import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValitorsComponent{
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >=0)
        return { cannotContainSpace : true}
    }

    static shouldBeUnique(control : AbstractControl) : Promise <ValidationErrors | null> {
    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value == "ravi")
                    resolve({ shouldBeUnique : true});
                else
                    resolve(null);
            }, 1000);
        })

        
        return null;
    }
}