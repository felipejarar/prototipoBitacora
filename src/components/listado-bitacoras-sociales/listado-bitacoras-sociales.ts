import { Component } from '@angular/core';
import { ActionSheetController, ModalController} from 'ionic-angular'
import { PlacesComponent } from '../../components/places/places';

/**
 * Generated class for the ListadoBitacorasSocialesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'listado-bitacoras-sociales',
  templateUrl: 'listado-bitacoras-sociales.html'
})
export class ListadoBitacorasSocialesComponent {

  sort_icon : any = "ios-bonfire";
  sort_label : any = "Más vistos";
  place_icon : any = "md-globe";
  place_label : any = "Chile";
  item_icon : any = "ios-grid";


  experience_posts : any = [{
      avatar: "assets/prototype/avatar/avatar_1.jpg",
      username: "Drake",
      place: "Santiago",
      time: "4h",
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis lectus eget dictum maximus. Nunc turpis felis, dignissim at nisi et, dignissim consectetur odio. Vestibulum quis fermentum leo. Donec laoreet sem sed porttitor tempor. Duis vel velit ac augue maximus ultricies. Maecenas elit turpis, auctor sed varius vel, viverra at sem. Duis accumsan ante eget consectetur rhoncus. Etiam accumsan vulputate eros in volutpat. In hac habitasse platea dictumst. Donec sed maximus magna. Nunc viverra odio vitae aliquet sodales. Fusce vel nibh pharetra diam cursus porta. Etiam tortor nisl, tincidunt nec sodales nec, imperdiet sit amet tortor. Aliquam erat volutpat. Integer ultricies tellus non convallis sodales."
  },{
    avatar: "assets/prototype/avatar/avatar_2.png",
    username: "Sam",
    place: "Arica",
    time: "2d",
    title: "Lorem Ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis lectus eget dictum maximus. Nunc turpis felis, dignissim at nisi et, dignissim consectetur odio. Vestibulum quis fermentum leo. Donec laoreet sem sed porttitor tempor. Duis vel velit ac augue maximus ultricies. Maecenas elit turpis, auctor sed varius vel, viverra at sem. Duis accumsan ante eget consectetur rhoncus. Etiam accumsan vulputate eros in volutpat. In hac habitasse platea dictumst. Donec sed maximus magna. Nunc viverra odio vitae aliquet sodales. Fusce vel nibh pharetra diam cursus porta. Etiam tortor nisl, tincidunt nec sodales nec, imperdiet sit amet tortor. Aliquam erat volutpat. Integer ultricies tellus non convallis sodales.",
    pics: ["assets/prototype/arica1.png","assets/prototype/arica2.png","assets/prototype/arica3.png"]

  }];


  constructor(
    public actionSheetCtrl:ActionSheetController,
    public modalCtrl:ModalController ) {
      console.log(this.experience_posts);
  }

  presentSortSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Ordenar por',
      buttons: [
        {
          text: 'Más vistos',
          icon: 'ios-bonfire',
          handler: () => {
            this.sort_icon = 'ios-bonfire';
            this.sort_label = "Más vistos";
          }
        },
        {
          text: 'Servicial',
          icon: 'ios-stats',
          handler: () => {
            this.sort_icon = 'ios-stats';
            this.sort_label = "Servicial";
          }
        },
        {
          text: 'Novedad',
          icon: 'ios-megaphone',
          handler: () => {
            this.sort_icon = 'ios-megaphone';
            this.sort_label = "Novedad";
          }
        }
      ]
    });

    actionSheet.present();  }

  presentPlaceSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Filtrar por',
      buttons: [
        {
          text: 'Chile',
          icon: 'md-globe',
          handler: () => {
            this.place_icon = 'md-globe';
            this.place_label = "Chile";
          }
        },
        {
          text: 'Mi localización',
          icon: 'md-compass',
          handler: () => {
            this.place_icon = 'ios-pin';
            this.place_label = "Santiago";
          }
        },
        {
          text: 'Otro',
          icon: 'ios-pin',
          handler: () => {
            this.place_icon = 'ios-pin';
            this.openPlacesModal();
          }
        }
      ]
    });

    actionSheet.present();
   }

   presentContentSheet(){
     let actionSheet = this.actionSheetCtrl.create({
       title: 'Filtrar por',
       buttons: [
         {
           text: 'General',
           icon: 'ios-grid',
           handler: () => {
             this.item_icon = 'ios-grid';
           }
         },{
           text: 'Experiencias',
           icon: 'ios-text',
           handler: () =>{
             this.item_icon = 'ios-text';
           }
         },
         {
           text: 'Multimedia',
           icon: 'ios-photos',
           handler: () => {
             this.item_icon = 'ios-photos';
           }
         }
       ]
     });

     actionSheet.present();
    }


   openPlacesModal(){
     let modal = this.modalCtrl.create(PlacesComponent, {}, {showBackdrop:true, enableBackdropDismiss:true});
     modal.onDidDismiss(data => {
       console.log(data);
       this.place_label = data;
     });
     modal.present();
   }
}
