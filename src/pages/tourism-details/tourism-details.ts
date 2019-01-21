import { Component } from '@angular/core';
import { IonicPage, ActionSheetController, ModalController, NavController, AlertController, NavParams } from 'ionic-angular';
import { ImageSliderViewerComponent } from '../../components/image-slider-viewer/image-slider-viewer';

/**
 * Generated class for the TourismDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tourism-details',
  templateUrl: 'tourism-details.html',
})
export class TourismDetailsPage {


  data : any;
  faved : any = false;
  map_placeholder : any = "assets/prototype/map_placeholder.png";
  apps : any = "general";

  constructor(    public actionSheetCtrl:ActionSheetController,
      public modalCtrl:ModalController,
    private alertCtrl: AlertController,
  public navCtrl: NavController,
public navParams: NavParams) {

    this.data = this.navParams.get('param');
    console.log(this.data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourismDetailsPage');
  }

  heartclicked(){
    this.faved = !this.faved;
  }

  addContact(){
    let alert = this.alertCtrl.create({
      title: 'Prototipo',
      subTitle: 'Está función debería permitir al usuario agregar la información de contacto en el dispositivo móvil',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  goSite(){
    let alert = this.alertCtrl.create({
      title: 'Prototipo',
      subTitle: 'Está función debería permitir al usuario abrir la página del sitio web en el navegador del dispositivo móvil',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  goBooking(){
    let alert = this.alertCtrl.create({
      title: 'Prototipo',
      subTitle: 'Está función debería permitir al usuario abrir la página booking en el navegador del dispositivo móvil',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  showSchedules(){
    let alert = this.alertCtrl.create({
      title: 'Prototipo',
      subTitle: 'Está función debería mostrar al usuario los diferentes horarios de Lunes a Domingo',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  openModal(data, index){

    let profileModal = this.modalCtrl.create(ImageSliderViewerComponent, { data : data, index: index}, {showBackdrop: false});
    profileModal.present();
  }
}
