import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { GlobalProvider } from '../../test/globalprovider';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabs: string;

  constructor(
    public navCtrl: NavController,
    public gbl: GlobalProvider,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController) {
      this.tabs = "personal";
  }


}
