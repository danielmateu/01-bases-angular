import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  // template: `
  // <h1>From Heroe Component</h1>
  // `
})

export class HeroeComponent {
  nombre: string = 'Iron Man'
  edad: number = 37

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string{
    return `Nombre: ${this.nombre} - Edad:${this.edad}`
  }

  cambiarNombre(): void{
    // console.log('Cambiando...')
    this.nombre = 'Spiderman'
  }

  cambiarEdad(): void{
    // console.log('Cambiando...')
    this.edad = 30
  }
}
