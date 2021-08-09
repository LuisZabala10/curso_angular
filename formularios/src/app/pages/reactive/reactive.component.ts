import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.crearFromulario();
  }

  ngOnInit(): void {
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

  crearFromulario(){
    //valor,validadores sincronos, validadores asincronos
    this.formulario = this.formBuilder.group(
      {
        nombre: ['',[Validators.required,Validators.min(4)]],
        apellido: ['',Validators.required],
        correo: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
      }
    );
  }

  guardar(){
    if(this.formulario.invalid){
      Object.values(this.formulario.controls).forEach(control=>{
        control.markAsTouched();
      })
    }
  }

}
