import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { MultiPickerModule } from 'ion-multi-picker';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  // simpleColumns: {
  //   name: string;
  //   options: {
  //     text: string;
  //     value: string;
  //   }[];
  // }[];

  simpleColumns = {};
  name: string;
  options:{}
  text: string;
  value: string;


  constructor(public navCtrl: NavController,
         
  ) {
    this.simpleColumns = [
      {
        name: 'col1',
        options: [
          { text: '上海银行', value: '1' },
          { text: '邮政银行', value: '2' },
          { text: '浦发银行', value: '3' },
          { text: '3', value: '3' },
          { text: '3', value: '3' },
          { text: '3', value: '3' },
          { text: '3', value: '3' },
          { text: '3', value: '3' },
          { text: '3', value: '3' },
        ]
      }
    ];
  }

}
