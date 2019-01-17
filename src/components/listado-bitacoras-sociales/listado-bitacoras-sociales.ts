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

  body_limit : any = 550;

  experience_posts : any = [{
      avatar: "assets/prototype/avatar/avatar_1.jpg",
      username: "Drake",
      place: "Santiago",
      time: "4 horas",
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis lectus eget dictum maximus. Nunc turpis felis, dignissim at nisi et, dignissim consectetur odio. Vestibulum quis fermentum leo. Donec laoreet sem sed porttitor tempor. Duis vel velit ac augue maximus ultricies. Maecenas elit turpis, auctor sed varius vel, viverra at sem. Duis accumsan ante eget consectetur rhoncus. Etiam accumsan vulputate eros in volutpat. In hac habitasse platea dictumst. Donec sed maximus magna. Nunc viverra odio vitae aliquet sodales. Fusce vel nibh pharetra diam cursus porta. Etiam tortor nisl, tincidunt nec sodales nec, imperdiet sit amet tortor. Aliquam erat volutpat. Integer ultricies tellus non convallis sodales.",

      views: 2,
      likes: 3,
      comments: 5,
      days: 4/24,

      liked: "dark"
  },{
    avatar: "assets/prototype/avatar/avatar_2.png",
    username: "Sam",
    place: "Arica",
    time: "1 semana",
    title: "Lorem Ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis lectus eget dictum maximus. Nunc turpis felis, dignissim at nisi et, dignissim consectetur odio. Vestibulum quis fermentum leo. Donec laoreet sem sed porttitor tempor. Duis vel velit ac augue maximus ultricies. Maecenas elit turpis, auctor sed varius vel, viverra at sem. Duis accumsan ante eget consectetur rhoncus. Etiam accumsan vulputate eros in volutpat. In hac habitasse platea dictumst. Donec sed maximus magna. Nunc viverra odio vitae aliquet sodales. Fusce vel nibh pharetra diam cursus porta. Etiam tortor nisl, tincidunt nec sodales nec, imperdiet sit amet tortor. Aliquam erat volutpat. Integer ultricies tellus non convallis sodales.",
    pics: ["assets/prototype/arica1.png","assets/prototype/arica2.png","assets/prototype/arica3.png"],

    views: 1,
    likes: 71,
    comments: 2,
    days: 7,

    liked: "primary"

  },{
    avatar: "assets/prototype/avatar/avatar_3.jpg",
    username: "Maria",
    place: "Chiloe",
    time: "3 días",
    title: "Fiesta del Cordero",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis lectus eget dictum maximus. Nunc turpis felis, dignissim at nisi et, dignissim consectetur odio. Vestibulum quis fermentum leo. Donec laoreet sem sed porttitor tempor. Duis vel velit ac augue maximus ultricies. Maecenas elit turpis, auctor sed varius vel, viverra at sem. Duis accumsan ante eget consectetur rhoncus. Etiam accumsan vulputate eros in volutpat. In hac habitasse platea dictumst. Donec sed maximus magna. Nunc viverra odio vitae aliquet sodales. Fusce vel nibh pharetra diam cursus porta. Etiam tortor nisl, tincidunt nec sodales nec, imperdiet sit amet tortor. Aliquam erat volutpat. Integer ultricies tellus non convallis sodales.",
    video: "assets/prototype/video/fiesta_del_cordero.mp4",

    views: 0,
    likes: 20,
    comments: 1,
    days: 3,

    liked: "dark"

  }];

  ads : any = [{
    id: 1,
    avatar: "assets/prototype/avatar/ads_1.png",
    name: "Hotel Castel",
    business: "Hoteles",
    place: "Santiago",
    booking: "loremipsum",
    body: "¿Necesitas un lugar donde dormir durante tus vacaciones? Hotel Castel te ofrece alojamiento de calidad a precios inigualables.",
    pic: "assets/prototype/ads/ads1.png"
  },{
    id: 2,
    avatar: "assets/prototype/avatar/ads_2.png",
    name: "Restaurant ¡Que Rico!",
    business: "Restaurantes",
    place: "Santiago",
    body: "Ven a ¡Que Rico! y disfruta de la especialidad de la casa:",
    pic: "assets/prototype/ads/ads2.png",
    web: "lorempsum"
  }];

  forums: any = [{
    id:1,
    forum_id:1,
    forum_name:"Chiloé",
    forum_place:"Chiloé",
    forum_avatar: "assets/prototype/avatar/foro_chiloe.png",
    username: "Maria",
    tag: "Fotografía",
    title: "El parque nacional de Chiloé estaba cerrado, pero al menos logre tomar esta fotografía",
    pic: "assets/prototype/forums/chiloe.png",
    time: "3 minutos",
    views: 34,
    likes: 20,
    comments: 7,
    days: 0.002,

    liked: "dark"
  },{
    id:2,
    forum_id: 2,
    forum_name: "Arica",
    forum_place: "Arica",
    forum_avatar: "assets/prototype/avatar/foro_arica.png",
    username: "Sam",
    tag: "Pregunta",
    title: "Consejos para mi viaje a Arica",
    body: "Saludos viajeros, me dirijo a Arica en Enero junto con mi novia y he investigado al respecto por mi cuenta. Pero quería saber si alguno de ustedes tiene alguna sugerencia de los lugares que no deberia pasar de largo durante mi estancia. Soy de Peru y teníamos pensado visitar:\n\n\u2022 El Morro de Arica\n\u2022 La peninsula del Alacrán\n\u2022 El valle del Lluta\n\nCualquier comentario al respecto se agradecería mucho. Gracias por adelantado.",
    time: "10 horas",
    views: 24,
    likes: 10,
    comments: 3,
    days: 0.41,

    liked: "dark"

  },{
    id:3,
    forum_id:3,
    forum_name: "Playas",
    forum_place: "Chile",
    forum_avatar: "assets/prototype/avatar/foro_playas.png",
    username: "Drake",
    tag: "Discusión",
    title: "¿Cual es la mejor playa de Chile para visitar en las vacaciones?",
    body: "Para mi lo es la playa de Caldera en Copiapó. Aguas muy limpias, viento despejado. Las olas no rompen con fuerza y representa una de las mejores posibilidades de descanso. La comida que se ofrece en los kioscos es barata y sabrosa.",
    time: "4 semanas",
    views: 2,
    likes: 2,
    comments: 1,
    days: 28,

    liked: "dark"

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
            this.experience_posts = this.experience_posts.sort((a,b) => (a.views < b.views) ? 1 : ((b.views < a.views) ? -1 : 0));
            this.forums = this.forums.sort((a,b) => (a.views < b.views) ? 1 : ((b.views < a.views) ? -1 : 0));
          }
        },
        {
          text: 'Mejores',
          icon: 'thumbs-up',
          handler: () => {
            this.sort_icon = 'thumbs-up';
            this.sort_label = "Mejores";
            this.experience_posts = this.experience_posts.sort((a,b) => (a.likes < b.likes) ? 1 : ((b.likes < a.likes) ? -1 : 0));
            this.forums = this.forums.sort((a,b) => (a.likes < b.likes) ? 1 : ((b.likes < a.likes) ? -1 : 0));

          }
        },
        {
          text: 'Novedad',
          icon: 'ios-megaphone',
          handler: () => {
            this.sort_icon = 'ios-megaphone';
            this.sort_label = "Novedad";
            this.experience_posts = this.experience_posts.sort((a,b) => (a.days > b.days) ? 1 : ((b.days > a.days) ? -1 : 0));
            this.forums = this.forums.sort((a,b) => (a.days > b.days) ? 1 : ((b.days > a.days) ? -1 : 0));

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

   forumClicked(){
     console.log("Go to forum");
   }

   forumPostClicked(){
     console.log("Go to forum post");
   }

   forumOption(){
     console.log("Show forum options");
   }

   userClicked(username){
     console.log("Show user " + username);
   }

   expClicked(experience){
     console.log("Experiencie clicked");
   }

   adReferenceClicked(ad){
    console.log("Ad reference clicked");
   }

   adClicked(ad){
     console.log("Ad clicked");
   }

   likePostClicked(obj){
     if (obj.liked == "primary"){
       obj.liked = "dark";
       obj.likes = obj.likes - 1;
     }else{
       obj.liked = "primary";
       obj.likes = obj.likes + 1;
     }
   }
}
