import { Component } from '@angular/core';
import { AboutPage } from './about/about.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
constructor (private a:NavController){

}

  Aboutpage(){
    this.a.navigateForward('/about')
  }
}

