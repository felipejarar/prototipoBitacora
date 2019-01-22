import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ViewController, ModalController, NavParams } from 'ionic-angular';
import { NewTabComponent } from '../../components/new-tab/new-tab';
import { ForumsPage } from '../forums/forums';
import { MessagesPage } from '../messages/messages';
import { TourismPage } from '../tourism/tourism';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TourismPage;

  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController, params: NavParams ) {

  }

  openNewModel() {
      let modal = this.modalCtrl.create(NewTabComponent);
      modal.present();
  }


}
