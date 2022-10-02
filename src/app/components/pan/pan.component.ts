import jwt_decode from "jwt-decode";
import {PanierService} from "../../services/panier.service";
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.scss'],
})
export class PanComponent implements OnInit {

  @Input()
  article:any
  fileUrl="http://localhost:3000/file/get/";
  quant=1;
  prix!: number;
  somme=0
  user:any
  @Output()
  quantirchange=new EventEmitter<any>()

  @Output()
  del=new EventEmitter<any>()
  constructor(private panierS:PanierService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('dhiamelliti');

    if(token) {
      let decoded = jwt_decode(token);

      this.user=decoded;
    }
    this.prix=this.article.prix*this.quant

    let commande={
      prix:this.prix,
      quantite:this.quant,
      id:this.article.nom,
    }
    console.log('commande',commande)
    this.quantirchange.emit(commande)

  }

  moins() {
    this.quant=this.quant-1
    this.prix=this.article.prix*this.quant
    let commande={
      prix:this.prix,
      quantite:this.quant,
      id:this.article.nom
    }
    this.quantirchange.emit(commande)
  }
  plus() {
    this.quant=this.quant+1
    this.prix=this.article.prix*this.quant
    let commande={
      prix:this.prix,
      quantite:this.quant,
      id:this.article.nom,
    }
    console.log('commande',commande)
    this.quantirchange.emit(commande)

  }


  delete() {
    this.panierS.deleteproduit(this.user.data._id,this.article._id).subscribe(res=>{
      window.location.reload()
    })
  }


}
