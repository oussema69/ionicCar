import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NavController, ToastController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../../services/login.service";
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form1: FormGroup;
  isTypePassword = true;
  user: any;
  app: any;
  // eslint-disable-next-line max-len
  constructor(public toastController: ToastController,
              public httpClient: HttpClient,
              public navCtrl: NavController ,
              private router: Router,
              private authservice: LoginService,
  ) {
    this.initForm();
  }

  ngOnInit() {}

  initForm() {
    this.form1 = new FormGroup({
      email: new FormControl('',
        {validators: [Validators.required, Validators.email]}
      ),
      password: new FormControl('',
        {validators: [Validators.required, Validators.minLength(4)]}
      ),
    });
  }
  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }

  onSubmit() {
    console.log(this.form1.value);
    if(this.form1.valid) {
      this.form1.markAllAsTouched();
    }
    this.authservice.login(this.form1.value).subscribe((res: any)=>{
        localStorage.setItem('id', res.user.id);
        console.log('ttt',res.user.id)
          this.router.navigate(['/home/rec']);




      },
      error => {
        this.toastController.create({
          message: 'email ou mot de passe non valide !!',
          position: 'bottom',
          cssClass: 'toast-custom-class',
          buttons: [
            {
              side: 'end',
              handler: () => {
                console.log('');
              }
            }, {
              side: 'end',
              text: 'fermer',
              role: 'cancel',
              handler: () => {
                console.log('');
              }
            }
          ]
        }).then((toast) => {
          toast.present();
        });
      });
  }

  go() {
    this.router.navigate(['reg'])
  }
}
