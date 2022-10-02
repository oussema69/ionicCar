import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import jwt_decode from "jwt-decode";
import {ArticleService} from "../../services/article.service";
import {Article} from "../../models/art";
import {PanierService} from "../../services/panier.service";
import {AlertController, ToastController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  fileUrl="http://localhost:3000/file/get/";
  cat:any
  Search: any;
  nom!:string;
  articles:any
  art!:Article
  user:any
  constructor(private Route:ActivatedRoute,private alertCtrl: AlertController,public toastController: ToastController,
              private articleS:ArticleService,private panierS:PanierService,  public httpClient: HttpClient,) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('dhiamelliti');

    if(token) {
      let decoded = jwt_decode(token);

      this.user=decoded;
      console.log(this.user.data._id)
    }
    this.nom=this.Route.snapshot.params['nom']
    this.getart()
  }
  getart(){
    this.articleS.trouverUnCat(this.nom).subscribe(res=>{
      this.articles=res
    })
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
  panier(id:string) {

    this.panierS.pushproduit(this.user.data._id,id).subscribe(res=>{
      this.presentAlert('Vous avez ajouter ce produit aux panier');

    })
  }
}
