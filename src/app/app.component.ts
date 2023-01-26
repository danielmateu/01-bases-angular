import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <h1>Hola mundo!</h1>
  // `
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Contador App';
  numero: number = 10;
  base  : number = 100


  acumular(valor: number){
    this.numero += valor;
  }


  // sumar(){
  //   this.numero += 1;
  // }

  // restar(){
  //   this.numero -= 1;
  // }
}
