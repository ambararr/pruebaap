import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { error } from 'console';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {

  email: string | undefined;
  userId:string | undefined;
  name:string | undefined;
  password!: string;
  
  constructor(
    private auth:AuthService,
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private afauth: AngularFireAuth,
    private router:Router
  ) { }

  ngOnInit(
  ) 
  {
    this.auth.user$.subscribe(user=>{
      this.userId=user?.userId;
      this.name=user?.userName;
      this.email=user?.userEmail;
    })
   }
  
  async resetpass( ){
    if(this.email){

      const loading = await this.loadingCtrl.create({
        message: 'Enviando link...',
        spinner: 'crescent',
        showBackdrop: true
      });
      loading.present();

      this.afauth.sendPasswordResetEmail(this.email).then(()=>{
        loading.dismiss();
        this.router.navigate(['/login']);
      })
      .catch((error)=>{
        this.toast(error.message,'danger');
      })
    }else {
      this.toast('Introduce tu Email..!!','warning');
    }
    
  }

  async toast(message: string,status: string){
    const toast = await this.toastr.create({
      message: message,
      color : status,
      position : 'top',
      duration : 2000
    });
    toast.present();
  }


}
