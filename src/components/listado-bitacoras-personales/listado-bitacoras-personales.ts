import { Component } from '@angular/core';
import { GlobalProvider } from '../../test/globalprovider';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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

  constructor(public gbl: GlobalProvider,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController) {
    this.bitacoras_personales = gbl.getBitacorasPersonales();
    this.bitacoras_personales_pics = this.bitacoras_personales.map(gbl.get5PicsFromBitacora);
    this.bitacoras_personales_post_counter = this.bitacoras_personales.map(gbl.getPostCounterBitacora);
    this.bitacoras_personales_pager = this.bitacoras_personales_pics.map(function(x){ return x.length > 0;} );
    this.bitacoras_personales_pic_counter = this.bitacoras_personales.map(gbl.getPicsCounter);
    this.bitacoras_personales_vid_counter = this.bitacoras_personales.map(gbl.getVideoCounter);
  }

  openBitacoraActions() {

    const notFinishedAlert = this.alertCtrl.create({
      title: "¡Estamos trabajando para usted!",
      subTitle: "La funcionalidad no se encuentra implementada en el actual prototipo",
      buttons: ['OK']
    });

    const actionSheet = this.actionSheetCtrl.create({
     buttons: [
       {
         text: 'Renombrar',
         icon: 'md-create',
         handler: () => {
           notFinishedAlert.present();
           console.log('Renombrar clicked');
         }
       },
       {
         text: 'Eliminar',
         icon: 'md-trash',
         handler: () => {
           console.log('Destructive clicked');
         }
       },{
         text: 'Archive',
         handler: () => {
           console.log('Archive clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }


}
