import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  // @Input() personajes: Personaje[] = []

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private DbzService: DbzService){}

  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0) return;

    // this.personajes.push(this.nuevo)
    // this.onNewCharacter.emit(this.nuevo)
    this.DbzService.addPersonaje(this.nuevo)

    this.nuevo = {
      nombre: '',
      poder: 0
    }

    // console.log(this.personajes)
  }
}
