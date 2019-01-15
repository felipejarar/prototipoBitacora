import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataBitacorasPersonales } from '../../prototype_data/data_bitacoras_personales';
import { ImageSliderViewerComponent } from '../../components/image-slider-viewer/image-slider-viewer';

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
  tabs: string;
  mypics: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public data: DataBitacorasPersonales) {
      var id_bitacora = navParams.get('id');
      var bitacora = data.getBitacora(id_bitacora);
      this.entradas = bitacora.entries;
      this.mypics = this.entradas.map(function(x){
        if (x.pics != null ){
          var pics_list = []
          for (let pics of x.pics){
            pics_list.push(pics.src);
          }
          return pics_list;
        }
        return null;
      });
      console.log(this.mypics);
      this.num_pic_entradas = this.entradas.map(data.getPicCounterFromEntrada);
      this.tabs = "general"

  }

  openModal(data, index){

    let profileModal = this.modalCtrl.create(ImageSliderViewerComponent, { data : data, index: index}, {showBackdrop: false});
    profileModal.present();
  }

  openPostActions(){
    console.log("Lol");
  }
  
  zoomImage(imageData){
  /**
    this.file.readAsDataURL(cordova.file.applicationDirectory + "www/", imageData)
        .then((dataURL:string) => {
          this.photoViewer.show(dataURL)});
**/
  /**
    File.readAsDataURL(cordova.file.applicationDirectory + "www/", "image.jpg");
this.photoViewer.show('./assets/prototype/img2.png', 'My image title', {share: false});
**/
}

  goback(){
    this.navCtrl.pop();
  }

}
