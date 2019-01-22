import { Component } from '@angular/core';
import { ViewController, NavParams, NavController} from 'ionic-angular';

/**
 * Generated class for the PlacesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'places',
  templateUrl: 'places.html'
})
export class PlacesComponent {

  search_text: string;
  selected_place: string;
  selected_value: any;

  provincias: any = ['Arica','Parinacota','Iquique','El Tamarugal','Antofagasta','El Loa','Tocopilla','Chañaral','Copiapó','Huasco','Choapa','Elqui','Limarí','Isla de Pascua','Los Andes','Petorca','Quillota','San Antonio','San Felipe de Aconcagua','Valparaiso','Chacabuco','Cordillera','Maipo','Melipilla','Santiago','Talagante','Cachapoal','Cardenal Caro','Colchagua','Cauquenes','Curicó','Linares','Talca','Arauco','Bio Bío','Concepción','Ñuble','Cautín','Malleco','Valdivia','Ranco','Chiloé','Llanquihue','Osorno','Palena','Aisén','Capitán Prat','Coihaique','General Carrera','Antártica Chilena','Magallanes','Tierra del Fuego','Última Esperanza'];
  regiones: any = ['Arica y Parinacota','Tarapacá','Antofagasta','Atacama','Coquimbo','Valparaiso','Metropolitana de Santiago','Libertador General Bernardo O\'Higgins','Maule','Biobío','La Araucanía','Los Ríos','Los Lagos','Aisén del General Carlos Ibáñez del Campo','Magallanes y de la Antártica Chilena'];
  zona: any = ['Norte Grande', 'Norte Chico', 'Zona Centro', 'Zona Sur', 'Zona Austral', 'Zona Insular'];

  places: any = this.provincias.concat(this.regiones.concat(this.zona));
  backup_places: any = this.places;

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController) {

  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  count:any = 0;
  onSelectionChange(bitacora_type){
    if (this.count == 0){
      this.count ++
    }else{
      this.viewCtrl.dismiss(this.selected_place);
    }
  }

  filterItems(event){
    var list = [];
    for (let place of this.backup_places){
      if (place.toLowerCase().includes(this.search_text.toLowerCase()) ){
        list.push(place);
      }
    }
    this.places = list;
  }

}
