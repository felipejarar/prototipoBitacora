import { Component } from '@angular/core';

/**
 * Generated class for the ListadoBitacorasCompartidasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'listado-bitacoras-compartidas',
  templateUrl: 'listado-bitacoras-compartidas.html'
})
export class ListadoBitacorasCompartidasComponent {

  text: string;

  constructor() {
    console.log('Hello ListadoBitacorasCompartidasComponent Component');
    this.text = 'Hello World';
  }

}
