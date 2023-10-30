import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name:string | undefined;
  email:string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  passmatch!: boolean;
  
  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
  ) { }

  ngOnInit() {
  }

  async register(){
    if(this.name && this.email && this.password)
    {
      const loading= await this.loadingCtrl.create({
        message: 'proccesing..',
        spinner: 'crescent',
        showBackdrop: true
      });
 
      loading.present();

      this.afauth.createUserWithEmailAndPassword(this.email,this.password)
      .then((data)=>{
        data.user?.sendEmailVerification();
        this.afs.collection('user').doc(data.user?.uid).set({
          'userId' : data.user?.uid,
          'userName' : this.name,
          'userPass' : this.password,
          'userEmail' : this.email,
          'created' : Date.now()
        })
        .then(()=>{
          loading.dismiss();
          this.toast('Te haz registrado! Revisa tu correo!','success');
          this.router.navigate(['/login']);
        })
        .catch(error => {
          loading.dismiss();
          this.toast(error.message,'danger');
        })
      })
      .catch(error => {
        loading.dismiss();
        this.toast(error.message,'danger');
      })
    }else{
      this.toast('Completa los campos..! Por Favor..','warning');
    }
  }//fin register

checkpass(){
  if(this.password==this.confirmPassword){
    this.passmatch=true;
  }else{
    this.passmatch=false;
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
