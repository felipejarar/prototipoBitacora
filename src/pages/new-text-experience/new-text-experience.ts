import { Component, NgZone, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewTextExperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-text-experience',
  templateUrl: 'new-text-experience.html',
})
export class NewTextExperiencePage {

  myDate: string = new Date().toISOString();
  title: string;
  description: string;
  showHelp: bool = true;


  descriptionTittleText: string = "Dummy Tittle"
  descriptionDummyText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a elit massa. Etiam non bibendum sapien. Nam in nulla ex. Morbi egestas turpis et vestibulum tincidunt. Cras pulvinar facilisis dolor, in luctus turpis tincidunt in. Mauris dolor diam, molestie quis tincidunt quis, consequat ut nisl. Donec feugiat orci vel risus ullamcorper porttitor sed posuere libero. Donec egestas vel felis vel ullamcorper. Vestibulum efficitur elit ut elit vestibulum, quis ullamcorper lacus pretium.";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public zone: NgZone,
    public element:ElementRef) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTextExperiencePage');
  }

  descriptionChanged(){
    this.showHelp = (this.description != null && this.description.length == 0);
  }

  titleFocus(){
    if (this.title == null){
      var index = 0;
      this.zone.run(() => { var timer = setInterval(() => { index++; this.title = this.descriptionTittleText.substring(0,index); if (index == this.descriptionTittleText.length){clearInterval(timer);}},1)});
    }
  }

  descriptionFocus(){
    if (this.description == null ){
      var index = 0;
      this.zone.run(() => { var timer = setInterval(() => { index++; this.description = this.descriptionDummyText.substring(0,index); if (index == this.descriptionDummyText.length){clearInterval(timer);}},1)});
    }
  }




}
