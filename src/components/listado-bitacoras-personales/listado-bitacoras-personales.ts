import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DataBitacorasPersonales } from '../../prototype_data/data_bitacoras_personales';
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

  constructor(
    public data: DataBitacorasPersonales,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController) {
      this.bitacoras_personales = data.getBitacoras();
      this.bitacoras_personales_pics = this.bitacoras_personales.map(data.getFivePictures);
      this.bitacoras_personales_post_counter = this.bitacoras_personales.map(data.getPostCounter);
      this.bitacoras_personales_pic_counter = this.bitacoras_personales.map(data.getPicCounter);
      this.bitacoras_personales_vid_counter = this.bitacoras_personales.map(data.getVidCounter);
      this.bitacoras_personales_pager = this.bitacoras_personales_post_counter.map(function(x){ return x > 1 });
  }

  openBitacora(id){
    var param = { id: id };
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
