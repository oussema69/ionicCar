import { Component, OnInit } from '@angular/core';
import {CommandeService} from "../../services/commande.service";
import {Utulisateur} from "../../models/user";
import {UtulisateurService} from "../../services/utulisateur.service";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss'],
})
export class CommandeComponent implements OnInit {

  commande:any
  user:any
  Search: any;
  constructor(private commandeS:CommandeService,private userS:UtulisateurService) { }

  ngOnInit(): void {
    this.getcom()
  }
  getcom(){
    this.commandeS.trouver().subscribe(res=>{
      this.commande=res
      console.log(this.commande,'maw9efnech')
      for(let i of this.commande){
        this.userS.trouverUn(i.idU).subscribe(data=>{
          this.user=data

        })
      }

    })

  }

  supprimer(_id: any) {
    if(confirm("vous voulez supprimer cette Commande?")) {
      this.commandeS.supprimer(_id).subscribe(res=>{
        this.getcom()
      })
    }
  }

}
