import { Component, OnInit } from '@angular/core';
import {CatService} from '../../services/cat.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  Search: any;
  cat: any;
  fileUrl="http://localhost:3000/file/get/";

  constructor(private catS: CatService,private router:Router) { }

  ngOnInit() {
    this.getCat()
  }
 getCat(){
    this.catS.trouver().subscribe(res=>{
      this.cat=res;
    });
 }

  go(nom: string) {
this.router.navigate(['home/art/'+nom])  }
}
