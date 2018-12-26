import { Component } from '@angular/core';
import { GlobalProvider } from '../../test/globalprovider';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
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


    bitacoras_compartidas: any;
    bitacoras_compartidas_pics: any;
    bitacoras_compartidas_post_counter: any;
    bitacoras_compartidas_pager: any;
    bitacoras_compartidas_pic_counter: any;
    bitacoras_compartidas_vid_counter: any;

    constructor(public gbl: GlobalProvider,
      public actionSheetCtrl: ActionSheetController,
      public alertCtrl: AlertController) {
      this.bitacoras_compartidas = gbl.getBitacorasCompartidas();
      this.bitacoras_compartidas_pics = this.bitacoras_compartidas.map(gbl.get5PicsFromBitacora);
      this.bitacoras_compartidas_post_counter = this.bitacoras_compartidas.map(gbl.getPostCounterBitacora);
      this.bitacoras_compartidas_pager = this.bitacoras_compartidas_pics.map(function(x){ return x.length > 0;} );
      this.bitacoras_compartidas_pic_counter = this.bitacoras_compartidas.map(gbl.getPicsCounter);
      this.bitacoras_compartidas_vid_counter = this.bitacoras_compartidas.map(gbl.getVideoCounter);
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
