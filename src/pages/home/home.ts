import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/delay';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController

  ) {

  }
  getInputE($event) {
    let time = 2;
    time--;
    time = setTimeout(() => {
      console.log($event.target.value)
      if (time == 0) {
        clearTimeout(time)
      }
    }, 1000)
  }
  key(event: any) { 
  }

}
