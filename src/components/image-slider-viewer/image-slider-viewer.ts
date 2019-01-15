import { Component } from '@angular/core';
import {  NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ImageSliderViewerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  templateUrl: 'image-slider-viewer.html'
})
export class ImageSliderViewerComponent {

  text: string;
  myParam: string;

  pics: any;
  focus: any;

  constructor(public viewCtrl: ViewController, params: NavParams) {

    this.pics = params.get('data');
    this.focus = params.get('index');

    console.log('aaa', params.get('data'), this.focus );


    this.text = 'assets/prototype/img1.png';
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
