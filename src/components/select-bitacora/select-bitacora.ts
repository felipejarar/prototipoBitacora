import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { DataBitacorasPersonales } from '../../prototype_data/data_bitacoras_personales';
import { DataBitacorasCompartidas } from '../../prototype_data/data_bitacoras_compartidas';
/**
 * Generated class for the SelectBitacoraComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'select-bitacora',
  templateUrl: 'select-bitacora.html'
})
export class SelectBitacoraComponent {

  search_text: string;
  selected_bitacora: any;

  bitacoras_personales: any;
  backup_bitacoras_personales: any;

  bitacoras_compartidas: any;
  backup_bitacoras_compartidas: any;


  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public dataPersonal: DataBitacorasPersonales,
    public dataCompartida: DataBitacorasCompartidas,
    params: NavParams) {

    this.bitacoras_personales = dataPersonal.getBitacoras();
    this.backup_bitacoras_personales = this.bitacoras_personales;
    this.bitacoras_compartidas = dataCompartida.getBitacoras();
    this.backup_bitacoras_compartidas = this.bitacoras_compartidas;
    this.selected_bitacora = params.get('type') + " " + (params.get('id')).toString();
    console.log(this.selected_bitacora);
  }

  dismiss(){
    this.viewCtrl.dismiss(this.selected_bitacora);
  }

  filterItems(event){
    console.log(this.search_text);
    var list = [];
    for (let bitacora of this.backup_bitacoras_personales){
      if (bitacora.title != null && bitacora.title.toLowerCase().includes(this.search_text.toLowerCase()) ){
        list.push(bitacora);
      }
    }
    this.bitacoras_personales = list;
  }

  counter: any = 0;
  onSelectionChange(bitacora_type){
    if (this.counter == 0){
      this.counter++;
    } else {
      this.viewCtrl.dismiss(this.selected_bitacora);
    }
  }

}
