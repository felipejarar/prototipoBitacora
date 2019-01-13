import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ViewController, ModalController, NavParams } from 'ionic-angular';
import { NewTabComponent } from '../../components/new-tab/new-tab';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController, params: NavParams ) {

  }

  openNewModel() {
      let modal = this.modalCtrl.create(NewTabComponent);
      modal.present();
  }


}
