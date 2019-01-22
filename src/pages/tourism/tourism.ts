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

  contents : any = [
  {
      name: "Reserva Nacional Los Flamencos",
      description: "La unidad Los Flamencos está ubicada en la Región de Antofagasta, comuna de San Pedro de Atacama, provincia del Loa. Fue creada el día 17 de octubre de 1990, por Decreto Supremo nº 50 del Ministerio de Agricultura.\n\nLa unidad destaca por la protección de las especies de fauna como el tuco tuco de la puna, zorro culpeo, puma, vicuña y guanaco. En lo que ha flora se refiere el tamarugo y el algarrobo, están en estado de conservación vulnerable.\n\nSus principales senderos de excursión son: \n\n— en el sector de las lagunas Altiplánicas Miscanti-Miñiques, existen dos senderos habilitados en torno a ellas, ambos de dificultad media;\n\n— laguna Chaxa, tiene un sendero que puede ser guiado por guías locales;\n\n— valle de la Luna, posee 4 senderos habilitados de mediana dificultad;\n\n— aldea de Túlor, un sendero que se recorre con guías de la comunidad local de Coyo.\n\nAVISO: hasta el 31 de marzo del 2019 los sectores N° 1 y 2 de la Reserva Nacional los Flamencos (“Salar de Tara y Aguas Calientes I” y “Salar de Pujsa” respectivamente) CERRADOS, para implementar un programa de monitoreo en las poblaciones de Flamenco de James.",
      address: "A la unidad se puede acceder por ruta internacional Chile -Argentina B-241 por el paso de Jama los salares de Tara y Aguas Calientes 1.\n\n Al Sector 2: Salar de Pujsa: Ruta B-241: ruta internacional Chile-Argentina, por paso de Jama.\n\n Sector 3: Lagunas Miscanti y Miñiques: ruta internacional Chile-Argentina, CH- 23, por paso de Sico.\n\n Sector 4: Salar de Atacama, sector Soncor: ruta B-355, San Pedro de Atacama- Peine.\n\n Sector 5: Salar de Atacama, sector Aguas de Quelana: ruta B-355, San Pedro de Atacama-Peine.\n\n Sector 6: Valle de la Luna: ruta secundaria CH-23.\n\n Sector 7: Tambillo: ruta internacional Chile-Argentina, CH-23.",
      class: ["iconic", "nature"],
      type: "Reserva nacional",
      place: "Antofagasta",
      pic: "assets/prototype/reserva_nacional_los_flamencos.jpg",
      avatar: "assets/prototype/avatar/star.png",
      phone: "(+56) 55 2 85 16 08",
      site: true,
      mail: "antofagasta.oirs@conaf.cl.",
      schedules: {
        monday : "08:00 - 21:00 hrs",
        tuesday : "08:00 - 21:00 hrs",
        wednesday : "08:00 - 21:00 hrs",
        thrusday : "08:00 - 21:00 hrs",
        friday : "08:00 - 21:00 hrs",
        saturday: "08:00 - 15:00 hrs",
        sunday: "Cerrado"
      },
      pics:[
        { src : "assets/prototype/reserva_nacional_los_flamencos_2.jpg"},{ src : "assets/prototype/reserva_nacional_los_flamencos_3.jpg"},{ src :"assets/prototype/reserva_nacional_los_flamencos_4.jpg"},{ src :"assets/prototype/reserva_nacional_los_flamencos_5.jpg"}
      ]
  },
  {
      name: "Palacio de la Moneda",
      description: "Es la sede del Poder Ejecutivo y uno de los símbolos más representativos de la historia política del país.\n\ninaugurado en 1805 para servir como sede de la Real Casa de Moneda de Santiago, destinada a la acuñación de monedas. En 1846, el Presidente Manuel Bulnes trasladó a ese edificio la casa de Gobierno, siendo el primer Mandatario en habitarla. El último fue Carlos Ibáñez del Campo, en 1958.\n\nAsimismo, se transformó en escenario de uno de los hechos más determinantes de la historia de Chile, como fue el bombardeo que sufrió el 11 de septiembre de 1973. Tras ese hecho, un grupo de arquitectos lo restauró, manteniendo las líneas originales diseñadas por Toesca.\n\nDesde entonces ha experimentado algunos cambios, como haber sido pintada de blanco a fines del siglo pasado, o la remodelación de la Plaza de la Ciudadanía, bajo la cual fue construido el Centro Cultural Palacio La Moneda.\n\nFue declarado Monumento Nacional en 1951.",
      address: "Manzana comprendida por las calles Morandé, Moneda, Teatinos y Avda. Libertador Bernardo O'Higgins.",
      class: ["iconic", "culture"],
      type: "Monumento nacional",
      place: "Santiago",
      pic: "assets/prototype/moneda_3.jpg",
      avatar: "assets/prototype/avatar/star.png",
      phone: "(+56) 2 26904000",
      site: true,
      mail: "visitas@presidencia.cl",
      schedules: {
        monday : "08:00 - 21:00 hrs",
        tuesday : "08:00 - 21:00 hrs",
        wednesday : "08:00 - 21:00 hrs",
        thrusday : "08:00 - 21:00 hrs",
        friday : "08:00 - 21:00 hrs",
        saturday: "08:00 - 15:00 hrs",
        sunday: "Cerrado"
      },
      pics:[
        { src : "assets/prototype/moneda_1.jpg"},{ src : "assets/prototype/moneda_2.jpg"},{ src :"assets/prototype/moneda_4.jpg"},{ src :"assets/prototype/moneda_5.jpg"}
      ]
  },
  {
      name:  "Fiesta Costumbrista Casablanca",
      description: "Los ritmos más pausados de la existencia y de los trabajos del agro –trazados por los grandes ciclos estacionales–, marcan la vida del hombre y la mujer del campo, su modo de ver, de querer, de pensar, de sentir, de actuar, de relacionarse. Más allá de contabilizar los resultados, la comunidad campesina mide entonces la dignidad y el valor moral de su trabajo. Emerge ante ella toda la dimensión cultural viva de sus faenas diarias; toma consciencia de sí misma como cuerpo moral; siente con templanza su felicidad de situación y la agradece a Dios. A modo de gran familia ampliada, que ha ido generando sus propios ritos y costumbres, se reviste en la ocasión de sus mejores galas y –elevándose por encima de su propia cotidianidad– festeja. Ritos, galas y festejos, sucediéndose, en cierto momento ya son entrañable tradición.\n\n Nacen así las Fiestas Costumbristas, fruto de esta antigua y venerable raíz agraria y cristiana –hermanas por lo mismo de las Fiestas Religiosas Populares– donde las gentes de nuestra tierra celebran su modo de vida característico, sus usos y tradiciones, su mundo cultural y social, en definitiva, su identidad y la ofrecen amistosamente, como un bien muy preciado, al visitante citadino o al turista extranjero.",
      address: "Av Portales 90, Casablanca, Región de Valparaíso",
      class: ["culture", "entertainment"],
      type: "Fiesta rural",
      place: "Valparaiso",
      pic: "assets/prototype/fiesta_costumbrista.jpg",
      avatar: "assets/prototype/avatar/culture_blue.png",
      site: true,
      schedules: {
        monday : "11:00 - 17:00 hrs",
        tuesday : "11:00 - 17:00 hrs",
        wednesday : "11:00 - 17:00 hrs",
        thrusday : "11:00 - 17:00 hrs",
        friday : "11:00 - 17:00 hrs",
        saturday: "11:00 - 17:00 hrs",
        sunday: "Cerrado"
      }
  },{
    name: "Hotel Castel",
    description: "Nuestro hotel de 4 estrellas en Santiago le ofrece todos los servicios necesarios para que su estancia sea una experiencia única.\n\nEl Hotel Castel ofrece a todos sus clientes conexión a internet wifi gratis, así como 2 Business Centers gratuitos con conexión a internet de Banda Ancha. Uno de ellos está ubicado en el mismo lobby del hotel y el otro en la novena planta, por si necesita trabajar en un ambiente más tranquilo.\n\nUno de los principales atractivos del Hotel\n\nCastel se encuentra en la 10ª planta, nuestra piscina rodeada por 2 estupendas terrazas que le ofrecen unas magníficas vistas de todo el Skyline de Santiago, pudiendo contemplar la panorámica de la zona de Montjuïc, Puerto de Santiago y toda la avenida Paralelo hasta Plaza España. También son espectaculares las vistas de la torre Agbar, Sagrada Familia, plaza Cataluña, o las torres del Port Olímpic y el monumento de Colón.\n\n Junto a la piscina se encuentra el solárium, donde podrá relajarse y broncearse un poco antes de ir a las playas de Santiago. La sala de fitness cardiovascular (con servicio gratuito de toallas y aguas) complementa perfectamente los alrededores del hotel, ideales para hacer un poco de footing en los Jardines de Montjuïc.\n\nLe informamos que el Hotel Castel es un hotel No Fumador",
    address: "Av calle blanca 4269, Santiago",
    class: ["lodging"],
    type: "Hoteles",
    place: "Santiago",
    phone: "(+2) 2285 0779",
    mail: "hotelcastillo@gmail.com",
    web: true,
    pic: "assets/prototype/ads/ads1.png",
    avatar : "assets/prototype/avatar/hotel.png",
    schedules: {
      monday : "8:00 - 23:00 hrs",
      tuesday : "8:00 - 23:00 hrs",
      wednesday : "8:00 - 23:00 hrs",
      thrusday : "8:00 - 23:00 hrs",
      friday : "8:00 - 23:00 hrs",
      saturday: "8:00 - 23:00 hrs",
      sunday: "8:00 - 23:00 hrs"
    },
    pics: [{src: "assets/prototype/hotel/castillo (1).jpg"}, {src : "assets/prototype/hotel/castillo (2).jpg"} , {src: "assets/prototype/hotel/castillo (3).jpg"}]
  },
  {
    name: "La Parva",
    description: "Está situado a 2.750 metros de altura sobre el nivel del mar y a menos de una hora de Santiago. Es un complejo invernal exclusivo, con las características propias de un pueblo de nieve. Destaca por la belleza y armonía de las líneas arquitectónicas de sus edificaciones y sus pistas de esquí.",
    address: "Luis Carrera 1263 Of. 402 Vitacura, Santiago, Chile",
    class: ["entertainment"],
    type: "Actividad",
    place: "Santiago",
    phone : "(+56) 2 2922 2835",
    web: true,
    pic: "assets/prototype/parva.jpg",
    avatar: "assets/prototype/avatar/snow.png",
    schedules: {
      monday : "8:00 - 23:00 hrs",
      tuesday : "8:00 - 23:00 hrs",
      wednesday : "8:00 - 23:00 hrs",
      thrusday : "8:00 - 23:00 hrs",
      friday : "8:00 - 23:00 hrs",
      saturday: "8:00 - 23:00 hrs",
      sunday: "8:00 - 23:00 hrs"
    },
  },{
    name: "Bar Chiloé",
    description: "Es un bar  con más de 40 años de tradición familiar y atendido por sus dueños, quienes esperan a los visitantes con tragos típicos chilenos, como el Terremoto y vinos añejos. También ha servido como locación para películas y video clips.",
    class: ["food"],
    type: "Alimento y bebida",
    place: "Santiago",
    pic: "assets/prototype/bar_chiloe.jpg",
    avatar: "assets/prototype/avatar/bar.png",
    phone: "+222857907",
    web: true
  },{
    name: "¡Que Rico!",
    description: "En el Restaurante ¡Que Rico! se encuentra un espacio dedicado a la cocina italiana, su nombre es Orvietto . Es ideal para los amantes de la elegancia y el confort, además la dulce vibración que emite el piano todas las noches, termina de complementar el encanto del lugar acompañado por sus platos fuertes como el Robalo a la Beatriz, Baby Beef, Fettucine con Pollo, Rissoto.\n\nNo podía faltar una amplia lista de vinos y licores, que junto a la decoración y ambiente del lugar, logran ser un lugar estratégico para cerrar negocios o disfrutar de una velada romántica.",
    class: ["food"],
    type: "Restaurantes",
    place: "Santiago",
    phone: "+222857907",
    mail: "querico@gmail.com",
    amenities: true,
    pic: "assets/prototype/ads/ads2.png",
    avatar: "assets/prototype/avatar/food.png",
    pics: [{src: "assets/prototype/restaurante/comida1.jpg"}, {src : "assets/prototype/restaurante/comida3.jpg"}]
  }];

  pics_contents : any = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl:ActionSheetController,
    public modalCtrl:ModalController,
    private alertCtrl: AlertController) {

      for (let content of this.contents){
        if (content.pic){
          let data = { pic: content.pic, place: content.place, name: content.name, class: content.class, content: content};
          this.pics_contents.push(data);
        }
        if (content.pics){
          for (let picture of content.pics){
            let data = { pic: picture.src, place: content.place, name: content.name, class: content.class, content: content };
            this.pics_contents.push(data);
          }
        }

      }
      console.log(this.pics_contents)
  }

  ionViewDidLoad() {

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
       modal.onDidDismiss(data => { if (data != null) this.place_label = data; });
       modal.present();
     }

     contentClicked(content){
       this.navCtrl.push(TourismDetailsPage, { param: content});
     }

     segment: any = "iconic";
     all_tabs = ["iconic","lodging", "food", "entertainment", "culture", "nature", "family"];
     all_scrolls = [0, 100, 200, 300, 400]
     scroll_value: any = 0;

     swipeEvent(event){
       if (this.tab_backup == null){
         this.tab_backup = this.segment;
       }

       var index = this.all_tabs.indexOf(this.segment);
       var new_index = index;

       if (event.direction == 2 && index != this.all_tabs.length - 1){
           new_index = index + 1;
           this.scroll_value = 100 * (new_index - 1);
       } else if (event.direction == 4 && index != 0){
           new_index = index - 1 ;
           this.scroll_value = (new_index == 0) ? 0 : 100 * (new_index - 1);
       }
       this.segment = this.all_tabs[new_index];
       document.getElementById('toolbar_scrollable').scrollTo(this.scroll_value, 0);
       console.log(this.scroll_value);

     }

     tab_backup : any = "iconics";
     changeTab(value){
       if (this.tab_backup != null){
         var index =  this.all_tabs.indexOf(value);
         var old_index = this.all_tabs.indexOf(this.tab_backup);
         if (index > old_index){
           this.scroll_value = 100 * (index - 1);
         }
         else if (index < old_index){
           this.scroll_value = (index == 0) ? 0 : 100 * (index - 1);
         }
         document.getElementById('toolbar_scrollable').scrollTo(this.scroll_value, 0);
       }
        this.tab_backup = value;
     }

  multimedia_mode = false;
  presentDisplaySheet(){
    this.multimedia_mode = !this.multimedia_mode;
  }

  onScroll(){

  }
}
