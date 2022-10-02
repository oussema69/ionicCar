import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertController, ToastController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UtulisateurService} from "../../services/utulisateur.service";
import {Utulisateur} from "../../models/user";
import {FileService} from "../../services/file.service";
import {Panier} from "../../models/panier";
import {PanierService} from "../../services/panier.service";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss'],
})
export class RegistreComponent implements OnInit {
file:any
  form: FormGroup;

  user : Utulisateur=new Utulisateur();

  /* data: data=new data();*/
  constructor(private alertCtrl: AlertController,
              public toastController: ToastController,
              public httpClient: HttpClient,
              private router: Router, private userService: UtulisateurService,
              private files:FileService,
  private panierS:PanierService) {
    this.initForm();
  }
  async presentAlert(msg : string) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  goto(){
    this.router.navigate(['login']);
  }
  ngOnInit() {
  }

  initForm() {
    this.form = new FormGroup({
      Nom: new FormControl(null, {validators: [Validators.required]}),
      Prenom: new FormControl(null, {validators: [Validators.required]}),
      mail: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      mdp: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
      adr: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
      tel: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
    });
  }
  onSubmit() {
    this.files.upload(this.file).subscribe(res=>{
      if(this.form.valid){
        this.user.img=res.filename
        this.user.nom=this.form.value.Nom;
        this.user.prenom=this.form.value.Prenom;
        this.user.email=this.form.value.mail;
        this.user.motPasse=this.form.value.mdp;
        this.user.tel=this.form.value.tel;
        this.user.adresse=this.form.value.adr;
        this.user.role=1;

        this.userService.creer(this.user).subscribe(
          (res)  => {
            let pa=new Panier()
            console.log('ya nary',res.id._id)
            pa.idu=res.id._id
            this.panierS.creer(pa).subscribe(res=>{})
   this.router.navigate(['login'])
            this.presentAlert('Vous etes inscrits');
          },
          error => {
            this.presentAlert('Mail déjà utilisé');

          });
      }else{
        this.presentAlert("Vérifier les champs")
      }
    })

  }


  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }
}
