import { Component, ViewChild, NgZone  } from '@angular/core';
import { IonicPage, ActionSheetController, ModalController, NavController, AlertController, NavParams } from 'ionic-angular';
import { ImageSliderViewerComponent } from '../../components/image-slider-viewer/image-slider-viewer';
import { Content } from 'ionic-angular';

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

  @ViewChild(Content) content: Content;
  data : any;
  faved : any = false;
  map_placeholder : any = "assets/prototype/map_placeholder.png";
  apps : any = "general";



  constructor(    public actionSheetCtrl:ActionSheetController,
      public modalCtrl:ModalController,
    private alertCtrl: AlertController,
  public navCtrl: NavController,
public navParams: NavParams,
public zone: NgZone) {

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


  schedules_expand : any = false;
  showSchedules(event){
    this.schedules_expand = !this.schedules_expand;
  }

  limit_description : any = 300;
  show_more_description : any = false;
  toggleDescription(){
    this.show_more_description = !this.show_more_description;
  }

  openModal(data, index){

    let profileModal = this.modalCtrl.create(ImageSliderViewerComponent, { data : data, index: index}, {showBackdrop: false});
    profileModal.present();
  }

  segment : any = "general";
  tab_backup : any = "general";
  all_tabs : any = ["general","address", "contact","photos","feedback"];
  scroll_value: any = 0;
  changeTab(value){
    if (this.tab_backup != null){
      var index =  this.all_tabs.indexOf(value);
      var old_index = this.all_tabs.indexOf(this.tab_backup);
      if (index > old_index){ this.scroll_value = 100 * (index - 1) }
        else if (index < old_index){ this.scroll_value = (index == 0) ? 0 : 100 * (index - 1);}
      document.getElementById('toolbar_scrollable2').scrollTo(this.scroll_value, 0);
    }
     this.tab_backup = value;
     this.scrollToElement();
  }

  swipeEvent(event){
    if (this.tab_backup == null){this.tab_backup = this.segment;}
    var index = this.all_tabs.indexOf(this.segment);
    var new_index = index;
    if (event.direction == 2 && index != this.all_tabs.length - 1){
        new_index = index + 1;
        this.scroll_value = 100 * (new_index - 1);
    } else if (event.direction == 4 && index != 0){
        new_index = index - 1 ;
        this.scroll_value = (new_index == 0) ? 0 : 100 * (new_index - 1);
    }
    console.log(event.direction);

    this.segment = this.all_tabs[new_index];
    document.getElementById('toolbar_scrollable2').scrollTo(this.scroll_value, 0);
    this.scrollToElement();
  }

  onScroll(event){

    console.log("??");
    
    if (event != null){
      if (this.scroll_timer != 0 && (Date.now()- this.scroll_timer) < this.scroll_cool_down){
        return;
      }

      this.zone.run(() => {
        let general_offset = document.getElementById("general").offsetTop;
        let address_offset = document.getElementById("address").offsetTop;
        let contact_offset = document.getElementById("contact").offsetTop;
        let scrollTop = event.scrollTop;
        let value = null;
        if ( scrollTop < address_offset && this.segment != "general"){
          value = "general";
        } else if ( scrollTop >= address_offset && scrollTop < contact_offset && this.segment != "address"){
          value = "address";
        } else if (scrollTop >= contact_offset && this.segment != "contact"){
          value = "contact";
        }

        if (value){
          let index =  this.all_tabs.indexOf(value);
          let old_index = this.all_tabs.indexOf(this.tab_backup);
          if (index > old_index){ this.scroll_value = 100 * (index - 1) }
          else if (index < old_index){ this.scroll_value = (index == 0) ? 0 : 100 * (index - 1);}
          document.getElementById('toolbar_scrollable2').scrollTo(this.scroll_value, 0);
          this.tab_backup = this.segment;
          this.segment = this.all_tabs[index];

        }
      })
    }
  }



  scroll_timer: any = 0;
  scroll_cool_down: any = 500;
  scrollToElement(){
    this.scroll_timer = Date.now();
    let y = document.getElementById(this.segment).offsetTop;
    this.content.scrollTo(0, y);
  }

}
