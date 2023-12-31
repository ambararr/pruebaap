import { Component,ViewChild} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
 
  constructor(
    private afauth: AngularFireAuth,
    private router : Router
  ) {}

 
  logout(){
    this.afauth.signOut().then(()=>{
      this.router.navigate(['/login']);
    })
  }

}

