import { Component, Output, EventEmitter } from '@angular/core';
import { Seccion } from 'src/app/modelos/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {
@Output() public salirS = new EventEmitter();
@Output() public datoSeccion = new EventEmitter(Seccion);
@Output() public salirString = new EventEmitter(Seccion);

//se crean los métodos
//se declara el método seccion el cual contiene los atributos del interface
public newSeccion: Seccion = {
  id: 0,
  nombreSeccion: ''
}

/////////////////////////////////////////////////

//se crean los métodos que agregan lo recibido
public incluirIdSeccion(event: Event): void {
  const element = event.target as HTMLInputElement;
  this.newSeccion.id = Number.parseInt(element.value)
  this.salirS.emit();
}

/////////////////////////////////////////////////

public incluirNombreSeccion(event: Event): void {
  const element = event.target as HTMLInputElement;
  this.newSeccion.nombreSeccion = element.value
  this.salirS.emit();
}

/////////////////////////////////////////////////

public guardarAtribS(): void {
  const copiar: Seccion= {
    ...this.newSeccion
  }
  this.datoSeccion.emit(copiar);
  this.newSeccion.id= 0;
  this.newSeccion.nombreSeccion='';

  this.salirS.emit();
}

}
