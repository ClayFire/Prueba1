import { Component, Output, EventEmitter } from '@angular/core';
import { Alumno } from './../../modelos/alumno'
@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
//se invoca Output para los datos de salida
@Output() public salir = new EventEmitter();
@Output() public datoAlumno = new EventEmitter(Alumno);
@Output() public salirString = new EventEmitter(Alumno);

//se crean los métodos
//se declara el método alumno el cual contiene los atributos del interface
public newAlumno: Alumno = {
  rut: 0,
  dv: '',
  nombre: '',
  apellido: '',
  edad: 0
}

//se crean los métodos que agregan lo recibido
public incluirRut(event: Event): void {
  const element = event.target as HTMLInputElement;
  this.newAlumno.rut = Number.parseInt(element.value)
  this.salir.emit();
}

/////////////////////////////////////////////////

public incluirDv(event: Event): void {
  const element = event.target as HTMLInputElement;
  this.newAlumno.dv = element.value
  this.salir.emit();
}

/////////////////////////////////////////////////

public incluirNombre(event: Event): void {
  const element = event.target as HTMLInputElement;
  this.newAlumno.nombre = element.value
  this.salir.emit();
}

/////////////////////////////////////////////////

public incluirApellido(event: Event): void {
  const element = event.target as HTMLInputElement;
  this.newAlumno.apellido = element.value
  this.salir.emit();
}

/////////////////////////////////////////////////

public incluirEdad(event: Event): void {
  const element = event.target as HTMLInputElement;
  this.newAlumno.edad = Number.parseInt(element.value)
  this.salir.emit();
}

/////////////////////////////////////////////////

//Método para guardar los atributos
public guardarAtrib(): void {
  const copiar: Alumno= {
    ...this.newAlumno
  }
  this.datoAlumno.emit(copiar);
  this.newAlumno.rut=0;
  this.newAlumno.dv='';
  this.newAlumno.nombre='';
  this.newAlumno.apellido='';
  this.newAlumno.edad=0;
  this.salir.emit();
}

}
