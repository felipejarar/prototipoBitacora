import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataBitacorasPersonales } from '../../prototype_data/data_bitacoras_personales';

/**
 * Generated class for the BitacoraPersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bitacora-personal',
  templateUrl: 'bitacora-personal.html',
})
export class BitacoraPersonalPage {

  entradas : any;
  num_pic_entradas: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data: DataBitacorasPersonales) {
      var id_bitacora = navParams.get('id');
      var bitacora = data.getBitacora(id_bitacora);
      this.entradas = bitacora.entries;
      this.num_pic_entradas = this.entradas.map(data.getPicCounterFromEntrada);
  }

  goback(){
    this.navCtrl.pop();
  }

}
