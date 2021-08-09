import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder,private validadores : ValidadoresService) { 
    this.crearFromulario();
    this.cargarDataAllFormulario();
    this.crearListeners();
  }

  ngOnInit(): void {
  }

  get pasatiempos(){
    return this.formulario.get('pasatiempos') as FormArray
  }

  get nombreNoValido(){
    return this.formulario.get('nombre')?.invalid && this.formulario.get('nombre')?.touched
  }

  get apellidoNoValido(){
    return this.formulario.get('apellido')?.invalid && this.formulario.get('apellido')?.touched
  }

  get correoNoValido(){
    return this.formulario.get('correo')?.invalid && this.formulario.get('correo')?.touched
  }

  get usuarioNoValido(){
    return this.formulario.get('usuario')?.invalid && this.formulario.get('usuario')?.touched
  }

  get distritoNoValido(){
    return this.formulario.get('direccion.distrito')?.invalid && this.formulario.get('direccion.ciudad')?.touched
  }

  get ciudadNoValido(){
    return this.formulario.get('direccion.ciudad')?.invalid && this.formulario.get('direccion.ciudad')?.touched
  }

  get pass1NoValido(){
    return this.formulario.get('pass1')?.invalid && this.formulario.get('pass1')?.touched
  }

  get pass2NoValido(){
    const pass1 = this.formulario.get('pass1')?.value;
    const pass2 = this.formulario.get('pass2')?.value;

    return (pass1 === pass2) ? false: true;
  }

  crearFromulario(){
    //valor,validadores sincronos, validadores asincronos
    this.formulario = this.formBuilder.group(
      {
        nombre: ['',[Validators.required,Validators.min(4)]],
        apellido: ['',[Validators.required]],
        correo: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        usuario : ['', ,this.validadores.existeUsuario],
        pass1: ['',Validators.required],
        pass2: ['',Validators.required],
        direccion : this.formBuilder.group({
          distrito: ['',Validators.required],
          ciudad: ['',Validators.required]
        }),
        pasatiempos : this.formBuilder.array([])
      },
      {
        validators: this.validadores.passwordsIguales('pass1','pass2')
      }
    );
  }


  crearListeners(){
    this.formulario.valueChanges.subscribe(valor => {
      console.log(valor);
    })
  }

  agregarPasatiempo(){
    this.pasatiempos.push(this.formBuilder.control(['']))
  }

  borrarPasatiempo(index: number){
    this.pasatiempos.removeAt(index)
  }

  guardar(){
    if(this.formulario.invalid){
      Object.values(this.formulario.controls).forEach(control=>{
        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control =>{
            control.markAsTouched();
          })
        }
        control.markAsTouched();
      })
    }

    //posteo del formulario
    //this.formulario.reset();

  }

  cargarDataAllFormulario(){
    // this.formulario.setValue({
    //   nombre: 'Juan',
    //   apellido: 'Zabala',
    //   correo: 'juan@gmail.com',
    //   direccion:{
    //     distrito: 'DN',
    //     ciudad: 'Santo Domingo'
    //   }
    // });
  }

}
