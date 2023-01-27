import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  // styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Mastro Roshi',
    poder: 1000
  }

  agregarNuevoPersonaje(argumento: Personaje){
    // debugger;
    // this.personajes.push(argumento)
  }

  /**
   * The constructor function is a special function that is called when an instance of a class is
   * created
   * @param {DbzService} dbzService - This is the name of the parameter.
   */
  constructor() {}





}
