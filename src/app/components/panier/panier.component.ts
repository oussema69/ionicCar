import { Component, OnInit } from '@angular/core';
import {Panier} from "../../models/panier";
import {Commande} from "../../models/commande";
import jwt_decode from "jwt-decode";
import {Router} from "@angular/router";
import {ArticleService} from "../../services/article.service";
import {PanierService} from "../../services/panier.service";
import {Article} from "../../models/art";
import {CommandeService} from "../../services/commande.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss'],
})
export class PanierComponent implements OnInit {

  hidden=false;
  panier!:any
  user:any
  art:Article[]=[]
  fileUrl="http://localhost:3000/file/get/";
  quant=0;
  commande:Commande = new Commande()

  h=false
  total=0

  constructor(private PanierS:PanierService,
              private ArticleS:ArticleService,private commandeService:CommandeService,
              private route:Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('dhiamelliti');

    if(token) {
      let decoded = jwt_decode(token);

      this.user=decoded;

    }
    this.getPanier()

  }
  getPanier(){
    this.PanierS.trouveruser(this.user.data._id).subscribe(res=>{
      this.panier=res
      for(var i of this.panier.idP){



        this.ArticleS.trouverUn(i).subscribe(res=>{
          this.art.push(res)
          console.log(this.panier.idP,'tw tchoufny chnwali')
        })

      }
    })

    console.log('mat3adych',this.user)

  }
  hiden(){
    this.hidden=true
    this.h=false

  }
  hiden1(){

    this.hidden=false
    this.h=true

  }

  somme=0
  payment!: string;

  quantitechange(e: any) {
    if(this.commande.produit==undefined){

      this.commande.produit = [e]
      this.total=0
      for(let i of this.commande.produit){
        this.total=this.total+i.prix
      }

    }else {
      var a=this.commande.produit.filter(i=>i.id===e.id)[0]
      if(this.commande.produit.indexOf(a)!=-1){
        this.commande.produit[this.commande.produit.indexOf(a)] = e;
        this.total=0
        for(let i of this.commande.produit){
          this.total=this.total+i.prix
        }

      }else{
        this.commande.produit.push(e)
        this.total=0
        for(let i of this.commande.produit){
          this.total=this.total+i.prix

        }




      }
    }



  }

  adomicile() {


    let cmd=new Commande()
    cmd.idU=this.user.data._id
    cmd.payer=false
    cmd.prix=this.total
    cmd.produit=this.commande.produit

    cmd.adresse=this.user.data.adresse
    cmd.tel=this.user.data.tel
    cmd.nom=this.user.data.nom+' '+this.user.data.prenom


    this.commandeService.creer(cmd).subscribe(res=>{
      //Swal.fire({title: "vous avez passer une commande avec succés", icon: "success"})


      let a= new Panier()
      a.idP=[]
      this.PanierS.update(this.panier._id,a).subscribe(res=>{})
      window.location.reload()
    })

  }
  ligne() {


    let cmd=new Commande()
    cmd.idU=this.user.data._id
    cmd.payer=true
    cmd.prix=this.total
    cmd.produit=this.commande.produit
    cmd.adresse=this.user.data.adresse
    cmd.tel=this.user.data.tel
    cmd.nom=this.user.data.nom+' '+this.user.data.prenom



    this.commandeService.creer(cmd).subscribe(res=>{
     // Swal.fire({title: "vous avez passer une commande avec succés", icon: "success"})


      let a= new Panier()
      a.idP=[]
      this.PanierS.update(this.panier._id,a).subscribe(res=>{})
      window.location.reload()
    })
  }


  go() {
    let nom=localStorage.getItem('categ')
    this.route.navigate(['userhome/art/'+nom])
  }

}
