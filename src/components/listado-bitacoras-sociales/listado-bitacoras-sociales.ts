import { Component } from '@angular/core';

/**
 * Generated class for the ListadoBitacorasSocialesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'listado-bitacoras-sociales',
  templateUrl: 'listado-bitacoras-sociales.html'
})
export class ListadoBitacorasSocialesComponent {

  text: string;

  constructor() {
    console.log('Hello ListadoBitacorasSocialesComponent Component');
    this.text = 'Hello World';
  }

}
