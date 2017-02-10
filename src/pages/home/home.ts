import { Component } from '@angular/core';
import {AuthData} from '../../providers/auth-data';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authData: AuthData) {
    
  }

logOut(){
  this.authData.logoutUser().then(() => {
    this.navCtrl.setRoot(LoginPage);
  });
}

}
