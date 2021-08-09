import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate{
  [s:string] : boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

    validarApellido(control: FormControl):{[s:string]:boolean}{
      if(control.value?.toLowerCase() === 'zabala'){
        return{
          validarApellido : true
        }
      }

      return {validarApellido : false}
    }

    passwordsIguales(pass1: string,pass2: string){
      return (formGroup: FormGroup)=>{
        const pass1Control = formGroup.controls[pass1]
        const pass2Control = formGroup.controls[pass2]

        if(pass1Control === pass2Control){
          pass2Control.setErrors(null);
        }
        else{
          pass2Control.setErrors({noEsIgual : true});
        }
      }
    }

    existeUsuario(control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate> {

      if(!control.value){
        return Promise.resolve({existe: false});
      }
      
      return new Promise((resolve, reject)=>{

        setTimeout(()=>{
          if(control.value === 'luis'){
            resolve({existe: true})
          }else{
            null
          }
        },3500)
      });
    }
}
