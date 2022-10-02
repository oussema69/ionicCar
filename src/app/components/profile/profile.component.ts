import {Component, OnInit, ViewChild} from '@angular/core';
import {Utulisateur} from "../../models/user";
import {IonSlides} from "@ionic/angular";
import {FormGroup} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {UtulisateurService} from "../../services/utulisateur.service";
import {FileService} from "../../services/file.service";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  app: any;
  user: Utulisateur;
  userup: Utulisateur=new Utulisateur();

  nom:string;
  prenom:string;
  tel:number;
  adr:string;
  motPasse:string;
  email:string;
  @ViewChild('mySlider')  slides: IonSlides;
  swipeNext(){
    this.slides.slideNext();
  }
  decoded: any;

  form: FormGroup;
  logo:string;
  fileUrl="http://localhost:3000/file/get/";
  selectedFile: any;
  file: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(private userS: UtulisateurService,private fileservice:FileService) {


  }

  ngOnInit() {
    const tokenuser=localStorage.getItem('dhiamelliti');
    if(tokenuser) {
      const decoded = jwt_decode(tokenuser);

      this.app=decoded;
      console.log(this.app,'nejvef')
    }
    this.userS.trouverUn(this.app.data._id).subscribe(

      res=>{
        console.log(res)
        this.user=res;
        this.nom=this.user.nom
        this.prenom=this.user.prenom
        this.email=this.user.email
        this.motPasse=this.user.motPasse
        this.tel=this.user.tel
        this.adr=this.user.adresse
        this.userup.img=this.user.img
      }
    );
  }
  getuser(){

  }

  onSubmit() {
    if(this.file==undefined){
      if(this.email==''||this.nom.length==0||this.prenom.length==0||this.motPasse.length<7||this.tel<100000000 &&this.tel>99999999){
        alert('champs non valide')
      }else{
        this.userup.email=this.email
        this.userup.prenom=this.prenom
        this.userup.tel=this.tel
        this.userup.nom=this.nom
        this.userup.img=this.user.img
        this.userS.update(this.user._id,this.userup).subscribe(
          res=>{
            alert('champs mise a jour')

          }
        )
      }
    }
    else{
      if(this.email==''||this.nom.length==0||this.prenom.length==0||this.motPasse.length<7||this.tel<100000000 &&this.tel>99999999){
        alert('champs non valide')
      }else{
        this.fileservice.upload(this.file).subscribe(
          res=>{
            this.userup.email=this.email
            this.userup.prenom=this.prenom
            this.userup.tel=this.tel
            this.userup.nom=this.nom
            this.userup.img=res.filename
            this.userS.update(this.user._id,this.userup).subscribe(
              res=>{
                alert('champs mise a jour')
              }
            )

          }
        )
      }
    }
  }
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

}
