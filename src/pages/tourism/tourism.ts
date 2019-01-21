import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController, ModalController, AlertController} from 'ionic-angular'
import { PlacesComponent } from '../../components/places/places';
import { TourismDetailsPage } from '../../pages/tourism-details/tourism-details';

/**
 * Generated class for the TourismPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tourism',
  templateUrl: 'tourism.html',
})
export class TourismPage {


  place_icon : any = "md-globe";
  place_label : any = "Chile";
  body_limit : any = 300;
  segment: any = "all";

  contents : any = [{
    name:  "Fiesta Costumbrista Casablanca",
    description: "Los ritmos más pausados de la existencia y de los trabajos del agro –trazados por los grandes ciclos estacionales–, marcan la vida del hombre y la mujer del campo, su modo de ver, de querer, de pensar, de sentir, de actuar, de relacionarse. Más allá de contabilizar los resultados, la comunidad campesina mide entonces la dignidad y el valor moral de su trabajo. Emerge ante ella toda la dimensión cultural viva de sus faenas diarias; toma consciencia de sí misma como cuerpo moral; siente con templanza su felicidad de situación y la agradece a Dios. A modo de gran familia ampliada, que ha ido generando sus propios ritos y costumbres, se reviste en la ocasión de sus mejores galas y –elevándose por encima de su propia cotidianidad– festeja. Ritos, galas y festejos, sucediéndose, en cierto momento ya son entrañable tradición.\n\n Nacen así las Fiestas Costumbristas, fruto de esta antigua y venerable raíz agraria y cristiana –hermanas por lo mismo de las Fiestas Religiosas Populares– donde las gentes de nuestra tierra celebran su modo de vida característico, sus usos y tradiciones, su mundo cultural y social, en definitiva, su identidad y la ofrecen amistosamente, como un bien muy preciado, al visitante citadino o al turista extranjero.",
    type: "Fiesta rural",
    place: "Casablanca",
    pic: "assets/prototype/fiesta_costumbrista.jpg",
    avatar: "assets/prototype/avatar/star.png",
    phone: "+222857907",
    web: true
  },{
    name: "Hotel Castel",
    business: "Hoteles",
    place: "Santiago",
    description: "Nuestro hotel de 4 estrellas en Santiago le ofrece todos los servicios necesarios para que su estancia sea una experiencia única.\n\nEl Hotel Castel ofrece a todos sus clientes conexión a internet wifi gratis, así como 2 Business Centers gratuitos con conexión a internet de Banda Ancha. Uno de ellos está ubicado en el mismo lobby del hotel y el otro en la novena planta, por si necesita trabajar en un ambiente más tranquilo.\n\nUno de los principales atractivos del Hotel\n\nCastel se encuentra en la 10ª planta, nuestra piscina rodeada por 2 estupendas terrazas que le ofrecen unas magníficas vistas de todo el Skyline de Santiago, pudiendo contemplar la panorámica de la zona de Montjuïc, Puerto de Santiago y toda la avenida Paralelo hasta Plaza España. También son espectaculares las vistas de la torre Agbar, Sagrada Familia, plaza Cataluña, o las torres del Port Olímpic y el monumento de Colón.\n\n Junto a la piscina se encuentra el solárium, donde podrá relajarse y broncearse un poco antes de ir a las playas de Santiago. La sala de fitness cardiovascular (con servicio gratuito de toallas y aguas) complementa perfectamente los alrededores del hotel, ideales para hacer un poco de footing en los Jardines de Montjuïc.\n\nLe informamos que el Hotel Castel es un hotel No Fumador",
    phone: "+222857907",
    mail: "hotelcastillo@gmail.com",
    web: true,
    amenities: true,
    booking: true,
    pic: "assets/prototype/ads/ads1.png",
    avatar : "assets/prototype/avatar/hotel.png",
    pics: [{src: "assets/prototype/hotel/castillo (1).jpg"}, {src : "assets/prototype/hotel/castillo (2).jpg"} , {src: "assets/prototype/hotel/castillo (3).jpg"}]
  },
  {
    name: "La Parva",
    description: "Está situado a 2.750 metros de altura sobre el nivel del mar y a menos de una hora de Santiago. Es un complejo invernal exclusivo, con las características propias de un pueblo de nieve. Destaca por la belleza y armonía de las líneas arquitectónicas de sus edificaciones y sus pistas de esquí.",
    type: "Actividad",
    place: "Santiago",
    pic: "assets/prototype/parva.jpg",
    avatar: "assets/prototype/avatar/snow.png",
    phone: "+222857907",
    web: true
  },{
    name: "Bar Chiloé",
    description: "Es un bar  con más de 40 años de tradición familiar y atendido por sus dueños, quienes esperan a los visitantes con tragos típicos chilenos, como el Terremoto y vinos añejos. También ha servido como locación para películas y video clips.",
    type: "Alimento y bebida",
    place: "Santiago",
    pic: "assets/prototype/bar_chiloe.jpg",
    avatar: "assets/prototype/avatar/bar.png",
    phone: "+222857907",
    web: true
  },{
    name: "¡Que Rico!",
    business: "Restaurantes",
    place: "Santiago",
    description: "En el Restaurante ¡Que Rico! se encuentra un espacio dedicado a la cocina italiana, su nombre es Orvietto . Es ideal para los amantes de la elegancia y el confort, además la dulce vibración que emite el piano todas las noches, termina de complementar el encanto del lugar acompañado por sus platos fuertes como el Robalo a la Beatriz, Baby Beef, Fettucine con Pollo, Rissoto.\n\nNo podía faltar una amplia lista de vinos y licores, que junto a la decoración y ambiente del lugar, logran ser un lugar estratégico para cerrar negocios o disfrutar de una velada romántica.",
    phone: "+222857907",
    mail: "querico@gmail.com",
    amenities: true,
    pic: "assets/prototype/ads/ads2.png",
    avatar: "assets/prototype/avatar/food.png",
    pics: [{src: "assets/prototype/restaurante/comida1.jpg"}, {src : "assets/prototype/restaurante/comida3.jpg"} , {src: "assets/prototype/hotel/restaurante/comida4.jpg"}]
  }];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl:ActionSheetController,
    public modalCtrl:ModalController,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourismPage');
  }


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

     openPlacesModal(){
       let modal = this.modalCtrl.create(PlacesComponent, {}, {showBackdrop:true, enableBackdropDismiss:true});
       modal.onDidDismiss(data => {
         console.log(data);
         this.place_label = data;
       });
       modal.present();
     }

     contentClicked(content){
       this.navCtrl.push(TourismDetailsPage, { param: content});
     }
}
