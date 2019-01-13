import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { NewTextExperiencePage } from '../../pages/new-text-experience/new-text-experience';


/**
 * Generated class for the NewTabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'new-tab',
  templateUrl: 'new-tab.html'
})
export class NewTabComponent {

  text: string;
  myParam: string;

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    params: NavParams) {
    this.text = 'dfgdfg';
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  changePage(page){
    if (page == "texto"){
      this.navCtrl.push(NewTextExperiencePage);
    }
  }


}
