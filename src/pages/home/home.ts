import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabs: string;

  constructor(
    public navCtrl: NavController) {
      this.tabs = "personal";
  }

  search(){
    console.log("Searching");
  }
}
