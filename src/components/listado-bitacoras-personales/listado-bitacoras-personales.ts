import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DataBitacorasPersonales } from '../../prototype_data/data_bitacoras_personales';
import { DataBitacorasCompartidas } from '../../prototype_data/data_bitacoras_compartidas';

import { NavController } from 'ionic-angular';
import { BitacoraPersonalPage} from '../../pages/bitacora-personal/bitacora-personal';



/**
 * Generated class for the ListadoBitacorasPersonalesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'listado-bitacoras-personales',
  templateUrl: 'listado-bitacoras-personales.html'
})
export class ListadoBitacorasPersonalesComponent {

  bitacoras_personales: any;
  bitacoras_personales_pics: any;
  bitacoras_personales_post_counter: any;
  bitacoras_personales_pager: any;
  bitacoras_personales_pic_counter: any;
  bitacoras_personales_vid_counter: any;

  bitacoras_compartidas: any;
  bitacoras_compartidas_pics: any;
  bitacoras_compartidas_post_counter: any;
  bitacoras_compartidas_pic_counter: any;
  bitacoras_compartidas_vid_counter: any;

  bitacoras: any;
  bitacoras_pics: any;
  bitacoras_post_counter: any;
  bitacoras_pic_counter: any;
  bitacoras_vid_counter: any;

  constructor(
    public pdata: DataBitacorasPersonales,
    public cdata: DataBitacorasCompartidas,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController) {

      this.bitacoras_personales = pdata.getBitacoras();
      this.bitacoras_compartidas = cdata.getBitacoras();
      this.bitacoras =  this.bitacoras_personales.concat(this.bitacoras_compartidas);
      this.bitacoras = this.bitacoras.sort((a,b) => (a.edate < b.edate) ? 1 : ((b.edate < a.edate) ? -1 : 0));
      this.bitacoras_pics = this.bitacoras.map(function(x){ if (x.shared){ return cdata.getFivePictures(x); } else{ return pdata.getFivePictures(x) } });
      this.bitacoras_post_counter = this.bitacoras.map(function(x){ if (x.shared){ return cdata.getPostCounter(x); } else{ return pdata.getPostCounter(x) } });
      this.bitacoras_pic_counter = this.bitacoras.map(function(x){ if (x.shared){ return cdata.getPicCounter(x); } else{ return pdata.getPicCounter(x) } });
      this.bitacoras_vid_counter = this.bitacoras.map(function(x){ if (x.shared){ return cdata.getVidCounter(x); } else{ return pdata.getVidCounter(x) } });


      console.log(this.bitacoras);

      console.log(this.bitacoras_pics);
    }

  openBitacora(bitacora){
    var param = { data: bitacora };
    this.navCtrl.push(BitacoraPersonalPage, param);
  }

  openBitacoraActions() {

    const notFinishedAlert = this.alertCtrl.create({
      title: "¡Estamos trabajando para usted!",
      subTitle: "La funcionalidad no se encuentra implementada en el actual prototipo",
      buttons: ['OK'],
      cssClass: 'text-center'
    });

    const actionSheet = this.actionSheetCtrl.create({
     buttons: [
       {
         text: 'Editar',
         icon: 'md-create',
         handler: () => {
           notFinishedAlert.present();
         }
       },
       {
         text: 'Eliminar',
         icon: 'md-trash',
         handler: () => {
           notFinishedAlert.present();
         }
       },{
         text: 'Compartir en Facebook',
         icon: 'logo-facebook',
         handler: () => {
           notFinishedAlert.present();
         }
       },{
         text: "Exportar como revista digital",
         icon: "document",
         handler: () => {
           notFinishedAlert.present();
         }
       }
     ]
   });

   actionSheet.present();
 }


}
