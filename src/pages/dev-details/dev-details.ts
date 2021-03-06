import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DevDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dev-details',
  templateUrl: 'dev-details.html',
})
export class DevDetailsPage {

  public dev: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dev = navParams.get('dev');
  }



}
