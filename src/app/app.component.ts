import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import firebase from 'firebase'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;
  zone: NgZone;

  constructor(platform: Platform) {
    firebase.initializeApp({
      apiKey: "AIzaSyCJEN3n8p8tnEcJaA7wQbF70YJGaJHclmU",
      authDomain: "eventtutorial-87f23.firebaseapp.com",
      databaseURL: "https://eventtutorial-87f23.firebaseio.com",
      storageBucket: "eventtutorial-87f23.appspot.com",
      messagingSenderId: "575689696183"
    });

    this.zone = new NgZone({});

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      this.zone.run(() => {
        if (!user){
          this.rootPage = LoginPage;
        } else{
          this.rootPage = HomePage;
        }
        unsubscribe();
      });
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
