import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  activeForm: string = 'login';
  email!: string;
  password!: string;

  //toggleForm(formType: string) {
    //this.activeForm = formType;
  //}

  constructor(
    private auth: AuthService,
    private toastr: ToastController
  ) { }

  ngOnInit() {
  }

login (){

    if(this.email && this.password){
      
      this.auth.signIn(this.email,this.password)
    }else{
      this.toast('Introduce tu Email y Password...!!','warning');
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
